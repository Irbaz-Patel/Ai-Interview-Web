const Session = require("../models/Session");
const Question = require("../models/Question");

// @desc    Create a new session and link questions
// @route   POST /api/sessions/create
// @access  Private
exports.createSession = async (req, res) => {
  try {
    const {role, experience, topicsToFocus, description, questions} = req.body;
    // console.log("REQ BODY:", req.body); 
    //  console.log("User from token:", req.user);
    const userId = req.user._id; // Assuming you have a middleware setting req.user

    const session= await Session.create({
      user: userId,
      role,
      experience,
      topicsToFocus,
      description,
      // questions
    });


    const questionDocs= await Promise.all(
      questions.map(async (q)=>{
       const question= await Question.create({
         session: session._id,
        question: q.question,
        answer: q.answer,
       });
       return question._id;
      })
    );

    session.questions= questionDocs;
    await session.save();

    res.status(201).json({ success: true, session});


  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get all sessions for the logged-in user
// @route   GET /api/sessions/my-sessions
// @access  Private
exports.getMySessions = async (req, res) => {
  try {
    const sessions= await Session.find({user: req.user.id})
    .sort({createAt: -1})
    .populate("questions");
    res.status(200).json(sessions)
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get a session by ID with populated questions
// @route   GET /api/sessions/:id
// @access  Private
exports.getSessionById = async (req, res) => {
  try {
    const session= await Session.findById(req.params.id)
    .populate({
      path: "questions",
      options: { sort: {isPinned: -1, createdAt: 1}},
    })
    .exec();

    if(!session){
      return res.status(404).json({success: false, message: "Session not found"});
    }

      // ✅ Send back the session data
    return res.status(200).json({ success: true, session });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Delete a session and its questions
// @route   DELETE /api/sessions/:id
// @access  Private
exports.deleteSession = async (req, res) => {
  try {
    const session= await Session.findById(req.params.id)

    if(!session){
      return res.status(404).json({success: false, message: "Session not found"});
    }

    // Check if the logged-in user owns this session
    if (session.user.toString() !== req.user.id){
      return res.status(401).json({message: "Not authorized to delete this session"});
    }

    // First, delete all questions linked to this session
    await Question.deleteMany({session: session._id});

    // Then, delete the session
     await session.deleteOne();

     res.status(200).json({ message: "Session deleted successfully"});
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
