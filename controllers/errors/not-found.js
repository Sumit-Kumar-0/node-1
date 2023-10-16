const handleNotFoundError = (res, errorMessage) => {
    return res.status(404).json({ error: errorMessage });
};

module.exports = handleNotFoundError

