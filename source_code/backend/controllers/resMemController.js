import ResidentMember from "../models/residentMemberSchema.js";

const getAllResi = async (req, res) => {
  try {
    const resMems = await ResidentMember.find()
      .populate("userId")
      .populate("traineeId");
    res.status(200).json(resMems);
  } catch (error) {
    res.status(500).json({
      error: "An error has occured while retrieving Resident Members' info.",
    });
  }
};

export { getAllResi };
