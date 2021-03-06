const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(new LocalStrategy(function (handle, password, done) {
    User.findOne({
        handle: handle
    }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        const match = bcrypt.compareSync(password, user.password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
