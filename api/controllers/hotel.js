import Hotel from "../models/Hotel.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(err);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel has been deleted");
  } catch (error) {
    next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(err);
  }
};
export const countByCity = async (req, res, next) => {
  try {
    const cities = req.query.cities.split(",");
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(err);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({
      type: { $regex: /hotel/i },
    });
    const apartmentCount = await Hotel.countDocuments({
      type: { $regex: /apartment/i },
    });
    const resortCount = await Hotel.countDocuments({
      type: { $regex: /resort/i },
    });
    const villaCount = await Hotel.countDocuments({
      type: { $regex: /villa/i },
    });
    const cabinCount = await Hotel.countDocuments({
      type: { $regex: /cabin/i },
    });
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount },
    ]);
  } catch (error) {
    res.status(500).json(err);
  }
};
