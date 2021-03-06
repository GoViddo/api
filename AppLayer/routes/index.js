module.exports = {

    getConfig: (req, res) => {
        // An example to read config from a JSON file
        // const fs = require('fs');
        // fs.readFile('mockData.json', (err, data) => {
        //     if (err) res.status(500).send(err);
        //     res.status(200).send(JSON.parse(data));
        // });

        let configQuery = "SELECT * FROM config_table";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = {};

            for (var i = 0; i < result.length; i++) {

                data[result[i].config_key] = result[i].config_value;;

            }

            return res.status(200).send(data);
        });
    },

    getSliderImageData: (req, res) => {
        let sliderMaxCount = req.body.sliderMaxCount;

        let selectSliderImagesQuery = "SELECT * FROM `video_table` WHERE `banner_image` != '' and `status` = 1 ORDER BY video_id DESC LIMIT " + sliderMaxCount;

        db.query(selectSliderImagesQuery, function (err, result) {

            let resp = {};

            if (err) {
                resp.message = "failed";
                resp.data = err;
                return res.status(500).send(resp);
            }

            let data = [];
            resp.message = "success";
            for (var i = 0; i < result.length; i++) {
                sliderDetails = {};

                sliderDetails.video_id = result[i].video_id;
                sliderDetails.video_name = result[i].show_name;
                sliderDetails.video_description = result[i].shorten_text;
                sliderDetails.slider_image = result[i].banner_image;
                sliderDetails.shorten_text = result[i].shorten_text;
                sliderDetails.vdo_cipher_id = result[i].vdo_cipher_id;
                sliderDetails.jw_video_id = result[i].jw_video_id;
                sliderDetails.video_player_id = result[i].jw_video_id;

                data.push(sliderDetails);

            }

            resp.data = data;


            return res.status(200).send(resp);


        });

    },

    getGovTokenCount: (req, res) => {

        var walletName = req.body.walletName;

        console.log(walletName);
        let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

        let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;

        var resp = {};
        cmd.get(
            cleosWalletUnlockQuery,
            function (err1, data1, stderr1) {

                url = "cleos -u https://eos.greymass.com/ get currency balance hellogoviddo " + walletName;
                console.log(url);

                cmd.get(
                    url,
                    function (err, data, stderr) {

                        console.log(data);

                        resp.message = "success";
                        resp.walletAmount = data;
                        return res.status(200).send(resp);

                    }
                );
            }
        );




    },

    forgotPassword: (req, res) => {
        let email = req.body.email;
        resp = {};

        let selectSliderImagesQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + email + "' and `status` = '1'";

        db.query(selectSliderImagesQuery, function (err, result) {

            let resp = {};

            if (err) {
                resp.message = "failed";
                resp.data = err;
                return res.status(500).send(resp);
            }

            resp.message = "success";
            var password = result[0].password;

            const nodemailer = require("nodemailer");


            var smtpTransport = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'contact@goviddo.com',
                    pass: 'Contact@GoViddo'
                },
                tls: { rejectUnauthorized: false },
                debug: true
            });

            var mailOptions = {
                to: email,
                subject: "Goviddo Forgot Password",
                text: "Goviddo application password for this email id : " + password
            }
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (error) {
                    console.log(error);
                    // res.end("error");
                    resp.disp = "Mail Sent Failuer...";

                    return res.status(500).send(resp);

                } else {
                    console.log("Message sent: " + response.message);
                    // res.end("sent");
                    resp.disp = "Mail Sent Successfully...";
                    return res.status(200).send(resp);

                }
            });



        })

    },

    getVideoData: (req, res) => {
        let videoGenere = req.body.videoGenere;
        let videoEndLimit = req.body.videoLimit;
        let videoLastId = req.body.videoLastId;

        resp = {};
        data = [];


        // if (videoGenere == "Series") {
        //     var videoDetailQuery = "SELECT t3.series_name, t3.series_id, t3.series_home_image, t2.season_table_id FROM series_details_table as t3 LEFT JOIN series_season_details_table as t2 ON t2.series_number = t3.series_id WHERE t3.series_status = 1 and t3.series_id > '" + videoLastId + "' GROUP BY t3.series_id LIMIT " + videoEndLimit;

        //     db.query(videoDetailQuery, function (errm, resultm) {

        //         var j = 0;

        //         for (var i = 0; i < resultm.length; i++) {
        //             var videoId = resultm[i].series_id;
        //             var videoName = resultm[i].series_name;
        //             var home_image = resultm[i].series_home_image;
        //             var season_table_id = resultm[i].season_table_id;
        //             var video_genere = videoGenere;



        //             seriesData = {};

        //             seriesData.videoId = videoId;
        //             seriesData.videoName = videoName;
        //             seriesData.home_image = home_image;
        //             seriesData.season_id = season_table_id;
        //             seriesData.videoGenere = video_genere;

        //             data.push(seriesData);
        //             j = j + 1;

        //             if (j == resultm.length) {
        //                 resp.message = "success";
        //                 resp.videoGenere = videoGenere;
        //                 resp.data = data;
        //                 return res.status(200).send(resp);
        //             }

        //         }

        //     });

        // }
        //  else {
        var videoDetailQuery = "SELECT t1.video_id, t1.show_name, t1.created_date, t1.director, t1.duration, t1.home_image, t1.shorten_text, t1.show_on_home_page, t1.slug, t1.vdo_cipher_id, t1.jw_video_id, t1.video_tags, t1.video_description, t1.video_views_count, t1.video_earnings, t2.video_genere_id, t2.video_genere_name FROM video_table as t1 LEFT JOIN video_genere_table as t2 ON t1.video_genere_type = t2.video_genere_id WHERE t2.video_genere_name = '" + videoGenere + "' and t1.status = 1 and t1.video_id > '" + videoLastId + "' LIMIT " + videoEndLimit;

        db.query(videoDetailQuery, function (errm, resultm) {

            var j = 0;
            for (var i = 0; i < resultm.length; i++) {
                var videoId = resultm[i].video_id;
                var videoName = resultm[i].show_name;
                var created_date = resultm[i].created_date;
                var director = resultm[i].director;
                var duration = resultm[i].duration;
                var home_image = resultm[i].home_image;
                var shorten_text = resultm[i].shorten_text;
                var vdo_cipher_id = resultm[i].vdo_cipher_id;
                var jw_video_id = resultm[i].jw_video_id;
                var video_tags = resultm[i].video_tags;
                var video_description = resultm[i].video_description;
                var video_views_count = resultm[i].video_views_count;
                var video_earnings = resultm[i].video_earnings;
                var video_genere = videoGenere;



                videoData = {};

                videoData.videoId = videoId;
                videoData.videoGenere = video_genere;
                videoData.videoName = videoName;
                videoData.created_date = created_date;
                videoData.director = director;
                videoData.duration = duration;
                videoData.home_image = home_image;
                videoData.shorten_text = shorten_text;
                videoData.video_player_id = jw_video_id;
                videoData.video_tags = video_tags;
                videoData.video_description = video_description;
                videoData.video_views_count = video_views_count;
                videoData.video_earnings = video_earnings;

                data.push(videoData);
                j = j + 1;

                if (j == resultm.length) {
                    resp.message = "success";
                    resp.videoGenere = videoGenere;
                    resp.data = data;
                    return res.status(200).send(resp);
                }

            }

        });

        // }



    },


    getSeriesDetails(req, res) {
        let seriesId = req.body.seriesId;

        var videoDetailQuery = "SELECT * FROM `series_season_details_table` WHERE `series_number` = '" + seriesId + "' and `season_status` = '1'";

        db.query(videoDetailQuery, function (errm, resultm) {

            var j = 0;

            resp = {};
            data = [];


            for (var i = 0; i < resultm.length; i++) {
                var season_id = resultm[i].season_table_id;
                var season_name = resultm[i].season_name;
                var season_home_image = resultm[i].season_home_image;
                var season_number = resultm[i].season_number;
                var season_description = resultm[i].season_description;
                var season_launch_date = resultm[i].season_launch_date;
                var season_end_date = resultm[i].season_end_date;

                var seasonDetails = {};

                seasonDetails.season_id = season_id;
                seasonDetails.season_name = season_name;
                seasonDetails.season_home_image = season_home_image;
                seasonDetails.season_number = season_number;
                seasonDetails.season_description = season_description;
                seasonDetails.season_launch_date = season_launch_date;
                seasonDetails.season_end_date = season_end_date;

                data.push(seasonDetails);
                j = j + 1;

                if (j == resultm.length) {
                    resp.message = "success";
                    resp.data = data;
                    return res.status(200).send(resp);
                }

            }

        });


    },


    getSeasonDetails(req, res) {
        let seriesId = req.body.seriesId;
        let seasonId = req.body.seasonId;
        resp = {};
        data = [];


        if (seasonId != "") {
            var videoDetailQuery = "SELECT * FROM `video_table` WHERE `series_id` = '" + seriesId + "' and `season_id` = '" + seasonId + "' and `status` = '1'";
        }
        else {
            var videoDetailQuery = "SELECT * FROM `video_table` WHERE `series_id` = '" + seriesId + "' and `status` = '1' and `season_id` IS NULL";
        }


        db.query(videoDetailQuery, function (errm, resultm) {

            var j = 0;

            if (resultm.length == 0) {
                resp.message = "failed";
                return res.status(300).send(resp);

            }
            else {


                for (var i = 0; i < resultm.length; i++) {
                    var videoId = resultm[i].video_id;
                    var videoName = resultm[i].show_name;
                    var created_date = resultm[i].created_date;
                    var director = resultm[i].director;
                    var duration = resultm[i].duration;
                    var home_image = resultm[i].home_image;
                    var shorten_text = resultm[i].shorten_text;
                    var vdo_cipher_id = resultm[i].vdo_cipher_id;
                    var jw_video_id = resultm[i].jw_video_id;
                    var video_tags = resultm[i].video_tags;
                    var video_description = resultm[i].video_description;
                    var video_views_count = resultm[i].video_views_count;
                    var video_earnings = resultm[i].video_earnings;



                    videoData = {};

                    videoData.videoId = videoId;
                    videoData.videoName = videoName;
                    videoData.created_date = created_date;
                    videoData.director = director;
                    videoData.duration = duration;
                    videoData.home_image = home_image;
                    videoData.shorten_text = shorten_text;
                    videoData.video_player_id = jw_video_id;
                    videoData.video_tags = video_tags;
                    videoData.video_description = video_description;
                    videoData.video_views_count = video_views_count;
                    videoData.video_earnings = video_earnings;


                    data.push(videoData);
                    j = j + 1;

                    if (j == resultm.length) {
                        resp.message = "success";
                        resp.data = data;
                        return res.status(200).send(resp);
                    }

                }


            }

        });



    },


    getSubscriptionList: (req, res) => {
        let emailId = req.body.emailId;

        let userIdSelectionQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "'";

        db.query(userIdSelectionQuery, function (erre, result1) {

            var userid = result1[0].user_id;


            let selectSliderImagesQuery = "SELECT * FROM `subscirption_list` WHERE `user_id` = '" + userid + "'";


            db.query(selectSliderImagesQuery, function (err, result) {

                let resp = {};

                if (err) {
                    resp.message = "failed";
                    resp.data = err;
                    return res.status(500).send(resp);
                }

                let data = [];
                resp.message = "success";

                if (result.length == 0) {
                    let queryNewList = "SELECT * FROM `channel_list` WHERE `status` = 1";
                    db.query(queryNewList, function (errm, resultm) {

                        for (var i = 0; i < resultm.length; i++) {
                            previewDetails = {};

                            var channelId = resultm[i].channel_id;
                            previewDetails.video_id = resultm[i].channel_id;


                            data.push(previewDetails);

                        }

                        resp.data = data;

                        return res.status(200).send(resp);


                    });
                }
                else {
                    for (var i = 0; i < result.length; i++) {
                        previewDetails = {};

                        var channelId = result[i].subscription_channel_id;
                        previewDetails.video_id = result[i].subscription_channel_id;


                        data.push(previewDetails);

                    }

                    resp.data = data;

                    return res.status(200).send(resp);

                }



            });



        });

    },

    getChannelList: (req, res) => {

        let channelId = req.body.channelId;

        let channelDetailsQuery = "SELECT * FROM `channel_list` WHERE `channel_id` = '" + channelId + "' and `status` = 1";

        var previewDetails = {};

        db.query(channelDetailsQuery, function (errr, resultm) {

            previewDetails.channelId = channelId;
            previewDetails.slider_image = resultm[0].channel_logo_url;
            previewDetails.shorten_text = resultm[0].channel_name;

            return res.status(200).send(previewDetails);

        });


    },


    getSubscriptionData: (req, res) => {
        let channelId = req.body.channelId;


        let selectSliderImagesQuery = "SELECT * FROM `channel_list` WHERE `channel_id` = " + channelId;


        db.query(selectSliderImagesQuery, function (err, result) {


            let resp = {};

            if (err) {
                resp.message = "failed";
                resp.data = err;
                return res.status(500).send(resp);
            }

            let data = [];
            resp.message = "success";

            var chnnelName = result[0].channel_name;


            let selectDataQuery = "SELECT * FROM `video_table` WHERE `video_channel_name` = '" + chnnelName + "' and `status` = 1";


            db.query(selectDataQuery, function (error, resultm) {
                if (error) {
                    resp.message = "failed";
                    resp.data = err;
                    return res.status(500).send(resp);
                }
                else {

                    for (var i = 0; i < resultm.length; i++) {

                        videoDetails = {};

                        videoDetails.video_id = resultm[i].video_id;
                        videoDetails.home_image = resultm[i].home_image;
                        videoDetails.shorten_text = resultm[i].shorten_text;
                        videoDetails.vdo_cipher_id = resultm[i].vdo_cipher_id;
                        videoDetails.video_player_id = resultm[i].jw_video_id;

                        data.push(videoDetails);

                    }
                    resp.data = data;
                    return res.status(200).send(resp);


                }

            })





        });

    },

    login: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;

        if (!email || !password) {
            return res.status(400).send("Missing critical information");
        }

        let userQuery = "SELECT * FROM user_table WHERE email_id = '" + email + "';";

        db.query(userQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            if (!result || !result.length) {

                return res.status(200).send({ message: "User does not exist" });
            } else {
                const row = result[0];
                if (row.password == password) {
                    return res.status(200).send({
                        message: "Login success",
                        firstname: row.first_name,
                        lastname: row.last_name,
                        email: row.email_id,
                        walletName: row.eosio_account_name,
                        address: row.address,
                        country: row.country,
                        phone: row.phone_no,
                        gender: row.gender,
                        dob: row.birth_date
                    });
                } else {

                    return res.status(200).send({ message: "Invalid Password" });
                }
            }
        });
    },

    checkWalletName: (req, res) => {
        let walletName = req.body.walletName;
        var resp = {};

        let cleosCheckWalletName = "cleos -u https://eos.greymass.com/ get account " + walletName + " --json";

        cmd.get(
            cleosCheckWalletName,
            function (err, data, stderr) {
                if (err == null) {
                    resp.walletMessage = "Wallet Name Not Available";
                    console.log("Account Name Not Avilabile" + data);
                    return res.status(400).send(resp);
                }
                else {
                    resp.walletMessage = "Wallet Name Available";
                    console.log("Wallet Name Avilabile" + err);
                    return res.status(200).send(resp);
                }
            }
        );

    },


    getVideoRelatedDetails: (req, res) => {

        let videoId = req.body.videoId;
        let userEmail = req.body.userEmail;

        resp = {};

        let query = "SELECT * FROM `video_table` WHERE `video_id` = '" + videoId + "'";

        db.query(query, function (err, result) {

            if (err) {
                return res.status(400).send(err);
            }
            else {

                var videoName = result[0].show_name;
                resp.videoName = videoName;
                var channelName = result[0].video_channel_name;
                resp.channelName = channelName;
                var videoDescription = result[0].video_description;
                resp.videoDescription = videoDescription;
                var videoIdd = result[0].video_id;
                resp.videoIdd = videoIdd;
                var vdo_cipher_id = result[0].vdo_cipher_id;
                resp.vdo_cipher_id = vdo_cipher_id;
                var jw_video_id = result[0].jw_video_id;
                resp.jw_video_id = jw_video_id;
                resp.video_player_id = jw_video_id;


                let channelidquerry = "SELECT * FROM `channel_list` WHERE `channel_name` = '" + channelName + "'";

                db.query(channelidquerry, function (err, resultm) {

                    var channelid = resultm[0].channel_id;
                    var channelLogo = resultm[0].channel_logo_url;
                    resp.channelLogo = channelLogo;

                    let getuserdetials = "SELECT * FROM `user_table` WHERE `email_id` = '" + userEmail + "'";

                    db.query(getuserdetials, function (err, resultu) {

                        var userId = resultu[0].user_id;

                        let userLikeStatus = "SELECT * FROM `video_like_table` WHERE `user_id` = '" + userId + "' and `video_id` = '" + videoIdd + "' ";

                        db.query(userLikeStatus, function (err, resultum) {
                            if (resultum.length > 0) {
                                var likestatus = resultum[0].like_status;
                            }
                            else {
                                var likestatus = 2;
                            }


                            let subcriptionStatus = "SELECT * FROM `subscirption_list` WHERE `subscription_channel_id` = '" + channelid + "' and `user_id` = '" + userId + "'";

                            db.query(subcriptionStatus, function (err, resultuc) {
                                if (resultuc.length > 0) {
                                    var subscriptionstatus = 1;
                                }
                                else {
                                    var subscriptionstatus = 0;
                                }
                                resp.likestatus = likestatus;

                                resp.subscriptionstatus = subscriptionstatus;


                                let viewCount = "SELECT * FROM `video_views_table` WHERE `video_id` = '" + videoIdd + "'";

                                db.query(viewCount, function (err, resultvc) {

                                    var viewCount = resultvc.length;
                                    resp.viewCount = viewCount;



                                    let likeCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoIdd + "' and `like_status` = '1'";

                                    db.query(likeCount, function (erre, resultlc) {

                                        var likeCount = resultlc.length;
                                        resp.likeCount = likeCount;

                                        let dislikeCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoIdd + "' and `like_status` = '0'";

                                        db.query(dislikeCount, function (errm, resultdlc) {
                                            var dilikeCount = resultdlc.length;
                                            resp.dilikeCount = dilikeCount;

                                            return res.status(200).send(resp);


                                        });


                                    });


                                });



                            });



                        });

                    });


                });


            }

        });



    },

    getUserHistory: (req, res) => {

        let userEmail = req.body.userEmial;
        resp = {};
        data = [];

        let getUserIdQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + userEmail + "'";


        db.query(getUserIdQuery, function (err, result) {

            var userId = result[0].user_id;

            let getHistoryQuery = "SELECT * FROM `video_views_table` WHERE `view_user` = '" + userId + "' ORDER BY `view_id` DESC LIMIT 10";


            db.query(getHistoryQuery, function (errr, resulthq) {

                resp.message = "success";

                var chk = resulthq.length;

                var j = 0;

                for (var i = 0; i < resulthq.length; i++) {


                    var videoId = resulthq[i].video_id;

                    let getVideoDetailsQuery = "SELECT * FROM `video_table` WHERE `video_id` = '" + videoId + "'";



                    db.query(getVideoDetailsQuery, function (errm, resultm) {

                        ress = {};

                        var videoIdAdd = resultm[0].video_id;
                        var videoName = resultm[0].show_name;
                        var home_image = resultm[0].home_image;
                        var shorten_text = resultm[0].shorten_text;
                        var vdo_cipher_id = resultm[0].vdo_cipher_id;
                        var jw_video_id = resultm[0].jw_video_id;
                        var video_description = resultm[0].video_description;

                        ress.videoId = videoIdAdd;
                        ress.videoName = videoName;
                        ress.home_image = home_image;
                        ress.shorten_text = shorten_text;
                        ress.vdoCipherId = vdo_cipher_id;
                        ress.jw_video_id = jw_video_id;
                        ress.videoDescription = video_description;
                        ress.video_player_id = jw_video_id;


                        console.log(videoName);


                        data.push(ress);
                        j = j + 1;
                        if (j == chk) {
                            resp.data = data;
                            return res.status(200).send(resp);
                        }

                    });

                }

            });

        });

    },


    transactionDetails: (req, res) => {

        let email = req.body.email;

        let query = "SELECT * FROM `user_table` WHERE `email_id` = '" + email + "'";

        resp = {};

        db.query(query, function (err, result) {

            let userId = result[0].user_id;

            let transactionQuery = "SELECT * FROM `video_transactions` WHERE `transaction_user_id` = '" + userId + "'";

            datam = [];

            db.query(transactionQuery, function (err, resultu) {

                if (err) {
                    resp.message = "failed";
                    return res.status(400).send(resp);
                }
                else {
                    resp.message = "success";
                    for (var i = 0; i < resultu.length; i++) {

                        data = {};

                        let transaction_amount = resultu[i].transaction_amount;
                        let transaction_memo = resultu[i].transaction_memo;
                        let transaction_date = resultu[i].transaction_date;

                        data.transaction_amount = transaction_amount;
                        data.transaction_memo = transaction_memo;
                        data.transaction_date = transaction_date;

                        datam.push(data);

                    }

                    resp.data = datam;
                    return res.status(200).send(resp);

                }




            });

        });

    },

    watchLaterList: (req, res) => {

        let email = req.body.email;


        let userQuery = "SELECT * FROM user_table WHERE email_id = '" + email + "';";
        resp = {};
        data = [];

        db.query(userQuery, function (err, result) {

            const row = result[0];
            let id = row.user_id;


            let getListQuery = "SELECT * FROM `watch_later` WHERE `watch_letter_user_id` = '" + id + "'";

            db.query(getListQuery, function (errm, resultm) {

                var j = 0;

                for (var i = 0; i < resultm.length; i++) {
                    var videoId = resultm[i].watch_letter_video_id;

                    var query = "SELECT * FROM `video_table` WHERE `video_id` = '" + videoId + "'";


                    db.query(query, function (emr, rs) {

                        var videoId = rs[0].video_id;
                        var videoName = rs[0].show_name;
                        var vdoCipherId = rs[0].vdo_cipher_id;
                        var home_image = rs[0].home_image;
                        var video_player_id = rs[0].jw_video_id;



                        commentsData = {};

                        commentsData.videoId = videoId;
                        commentsData.videoName = videoName;
                        commentsData.vdoCipherId = vdoCipherId;
                        commentsData.home_image = home_image;
                        commentsData.video_player_id = video_player_id;



                        data.push(commentsData);

                        j = j + 1;

                        if (j == resultm.length) {


                            resp.message = "success";
                            resp.data = data;
                            return res.status(200).send(resp);


                        }

                    });

                }

            });

        });

    },

    getVideoGenereId: (req, res) => {

        let videoGenereName = req.body.videoGenereName;
        var resp = {};

        let query = "SELECT * FROM `video_genere_table` WHERE `video_genere_name` = '" + videoGenereName + "'";

        db.query(query, function (err, result) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                resp.message = "success";
                row = result[0];
                resp.genereId = row.video_genere_id;
                resp.genereName = row.video_genere_name;
                resp.status = row.status;

                return res.status(200).send(resp);
            }
        })
    },

    bannerImages: (req, res) => {

        let query = "SELECT * FROM `video_table` WHERE `show_on_home_page` = 1 and `status` = 1 ORDER BY `video_id` DESC LIMIT 5";
        var resp = {};

        db.query(query, function (err, result) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                resp.message = "success";

                data = [];

                for (var i = 0; i < result.length; i++) {
                    bannerDetails = {};

                    bannerDetails.video_id = result[i].video_id;

                    bannerDetails.show_name = result[i].show_name;

                    bannerDetails.created_date = result[i].created_date;

                    bannerDetails.director = result[i].director;

                    bannerDetails.duration = result[i].duration;

                    bannerDetails.home_image = result[i].home_image;

                    bannerDetails.banner_image = result[i].banner_image;

                    bannerDetails.producer = result[i].producer;

                    bannerDetails.shorten_text = result[i].shorten_text;

                    bannerDetails.show_on_home_page = result[i].show_on_home_page;

                    bannerDetails.slug = result[i].slug;

                    bannerDetails.starring = result[i].starring;

                    bannerDetails.vdo_cipher_id = result[i].vdo_cipher_id;

                    bannerDetails.video_tags = result[i].video_tags;

                    bannerDetails.video_description = result[i].video_description;

                    bannerDetails.video_genere_type = result[i].video_genere_type;

                    bannerDetails.video_channel_name = result[i].video_channel_name;

                    bannerDetails.production_name = result[i].production_name;

                    bannerDetails.video_views_count = result[i].video_views_count;

                    bannerDetails.video_earnings = result[i].video_earnings;

                    bannerDetails.status = result[i].status;
                    bannerDetails.video_player_id = result[i].jw_video_id;


                    data.push(bannerDetails);
                }

                resp.data = data;

                return res.status(200).send(resp);

            }
        })

    },


    saveViewInformation: (req, res) => {
        let vdoId = req.body.vdoId;
        let userEmailId = req.body.userEmailId;
        let videoViewDuration = req.body.videoViewDuration;
        var memo;

        let selectVideoIdQuery = "SELECT * FROM `video_table` WHERE `video_id` = '" + vdoId + "'";

        db.query(selectVideoIdQuery, function (err, result) {

            let resp = {};

            if (err) {
                resp.message = "failed";
                resp.data = err;
                return res.status(500).send(resp);
            }

            let videoId = result[0].video_id;
            let videoName = result[0].show_name;
            let videoUniqueIdUpload = result[0].vdo_cipher_id + " = " + result[0].video_id;

            let userDetailsQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + userEmailId + "'";

            db.query(userDetailsQuery, function (err1, result1) {

                if (err1) {
                    resp.message = "failed";
                    resp.data = err;
                    return res.status(500).send(resp);
                }

                let userId = result1[0].user_id;
                let walletName = result1[0].eosio_account_name;



                let verifyDetails = "SELECT * FROM `video_views_table` WHERE `view_user` = '" + userId + "' and `video_id` = '" + videoId + "'";

                db.query(verifyDetails, function (merr, mresult) {

                    if (mresult.length == 0) {

                        let qrn = "SELECT * FROM `video_views_table` WHERE `view_user` = '" + userId + "'";

                        db.query(qrn, function (mrre, mrresult) {


                            memo = "Unique View For Video " + videoUniqueIdUpload + " from user " + userId;


                            let insertIntoVideoViewQuery = "INSERT INTO `video_views_table`(`view_user`, `video_id`, `total_video_played_time`, `video_name`) VALUES (" + userId + "," + videoId + ",'" + videoViewDuration + "', '" + videoName + "')";


                            db.query(insertIntoVideoViewQuery, function (err2, result2) {

                                if (err1) {
                                    resp.message = "failed";
                                    resp.data = err;
                                    return res.status(500).send(resp);
                                }

                                let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

                                let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;

                                cmd.get(
                                    cleosWalletUnlockQuery,
                                    function (err1, data1, stderr1) {

                                        let sendTokens = "cleos -u https://eos.greymass.com/ push action hellogoviddo transfer '{\"from\":\"hellogoviddo\", \"to\":\"" + walletName + "\", \"quantity\":\"0.01 GOV\", \"memo\":\""+ memo +"\"}' -p  hellogoviddo";
                                        console.log(sendTokens);



                                        cmd.get(
                                            sendTokens,
                                            function (err, data, stderr) {


                                                let datam = [];
                                                resp.message = "success";

                                                reviewDetails = {};

                                                reviewDetails.userId = userId;
                                                reviewDetails.videoId = videoId;

                                                datam.push(reviewDetails);

                                                resp.data = datam;
                                                return res.status(200).send(resp);

                                            }
                                        );

                                        //  let data = [];
                                        //  resp.message = "success";

                                        //  reviewDetails = {};

                                        //  reviewDetails.userId = userId;
                                        //  reviewDetails.videoId = videoId;

                                        //  data.push(reviewDetails);

                                        //  resp.data = data;
                                        //  return res.status(200).send(resp);


                                    }
                                );






                            });






                        });


                    }
                    else {

                        let updateQuery = "UPDATE `video_views_table` SET `total_video_played_time`= '" + videoViewDuration + "' WHERE `video_id` = '" + videoId + "' and `view_user` = '" + userId + "'";

                        db.query(updateQuery, function (err2, result2) {

                            if (err1) {
                                resp.message = "failed";
                                resp.data = err;
                                return res.status(500).send(resp);
                            }


                            let data = [];
                            resp.message = "success";

                            reviewDetails = {};

                            reviewDetails.userId = userId;
                            reviewDetails.videoId = videoId;

                            data.push(reviewDetails);

                            resp.data = data;
                            return res.status(200).send(resp);


                        });



                    }

                });


            });




        });

    },


    addToWatchList: (req, res) => {

        let emailId = req.body.emailid;
        let video_id = req.body.video_id;

        resp = {};

        let query = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "'";

        db.query(query, function (err, result) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                row = result[0];
                let userid = row.user_id;

                let selectVideoId = "SELECT * FROM `video_table` WHERE `video_id` = '" + video_id + "'";
                db.query(selectVideoId, function (err, result) {

                    if (err) {
                        return res.status(400).send(err);
                    }
                    else {

                        row = result[0];
                        let videoid = row.video_id;

                        let checkQuery = "SELECT * FROM `watch_later` WHERE `watch_letter_video_id` = '" + videoid + "' and `watch_letter_user_id` = '" + userid + "'";

                        db.query(checkQuery, function (errmm, resutt) {

                            if (resutt.length == 0) {

                                let insertquery = "INSERT INTO `watch_later`(`watch_letter_video_id`, `watch_letter_user_id`) VALUES ('" + videoid + "','" + userid + "')";

                                db.query(insertquery, function (mterr, mtresult) {

                                    if (mterr) {
                                        return res.status(400).send(err);
                                    }
                                    else {
                                        resp.msg = "success";
                                        return res.status(200).send(resp);
                                    }

                                });

                            }
                            else {
                                resp.msg = "success";
                                return res.status(200).send(resp);
                            }

                        });

                    }
                });

            }
        });


    },


    sahreUrlTokens: (req, res) => {

        let emailId = req.body.emailid;
        let sharedVideoId = req.body.videoId;

        let getUserDetaislQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "'";

        db.query(getUserDetaislQuery, function (err, result) {

            var userId = result[0].user_id;
            var walletName = result[0].eosio_account_name;
            resp = {};

            let getVideoIdQuery = "SELECT * FROM `video_table` WHERE `video_id` = '" + sharedVideoId + "'";

            db.query(getVideoIdQuery, function (errr, resultt) {

                var videoIdd = resultt[0].video_id;

                insertQuery = "INSERT INTO `share_table`(`user_id`, `video_id`) VALUES ('" + userId + "','" + videoIdd + "')";

                db.query(insertQuery, function (erre, rsulte) {

                    if (erre) {
                        resp.messgae = "Error";
                        return res.status(400).send(resp);
                    }
                    else {
                        resp.message = "Success";


                        let queryCheckCount = "SELECT * FROM `share_table` WHERE `user_id` = '" + userId + "'";

                        db.query(queryCheckCount, function (ree, resulttm) {

                            var count = resulttm.length;

                            if ((count % 10) == 0) {


                                let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

                                let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;

                                cmd.get(
                                    cleosWalletUnlockQuery,
                                    function (err1, data1, stderr1) {

                                        let sendEOSTokensRegistration = "cleos -u https://eos.greymass.com/ push action hellogoviddo transfer '{\"from\":\"hellogoviddo\", \"to\":\"" + walletName + "\", \"quantity\":\"0.01 GOV\", \"memo\":\"10 shares\"}' -p  hellogoviddo";
                                        console.log(sendEOSTokensRegistration);
                                        cmd.get(
                                            sendEOSTokensRegistration,
                                            function (err, data, stderr) {


                                                let queryInsertTransactions = "INSERT INTO `video_transactions`(`transaction_amount`, `transaction_user_id`, `transaction_memo`, `transaction_from`) VALUES ('0.01 GOV','" + userId + "','10 shares','hellogoviddo')";

                                                db.query(queryInsertTransactions, function (mresr, mresultmm) {

                                                    return res.status(200).send(resp);

                                                });

                                            }
                                        );

                                    }
                                );



                            }
                            else {
                                return res.status(200).send(resp);
                            }

                        });


                    }


                });

            });


        });


    },



    likeUnlikeSstore: (req, res) => {
        let emailid = req.body.emailid;
        let likedislikestatus = req.body.likestatus;

        let video_id = req.body.videoid;
        resp = {};

        let query = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailid + "'";

        db.query(query, function (err, result) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                row = result[0];
                let userid = row.user_id;
                let walletName = row.eosio_account_name;

                let selectVideoId = "SELECT * FROM `video_table` WHERE `video_id` = '" + video_id + "'";
                db.query(selectVideoId, function (err, result) {

                    if (err) {
                        return res.status(400).send(err);
                    }
                    else {

                        row = result[0];
                        let videoid = row.video_id;

                        let checkupdation = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoid + "' and `user_id` = '" + userid + "'";
                        db.query(checkupdation, function (err, resultm) {


                            if (resultm.length < 1) {
                                let queryinsert = "INSERT INTO `video_like_table` (`video_like_id`, `video_id`, `user_id`, `like_status`) VALUES (NULL, '" + videoid + "', '" + userid + "', '" + likedislikestatus + "');";

                                db.query(queryinsert, function (err, result) {

                                    if (err) {
                                        return res.status(400).send(err);
                                    }
                                    else {
                                        resp.message = "success";
                                        let getCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoid + "' and `like_status` = 1";
                                        db.query(getCount, function (errmd, resultmd) {

                                            resp.likeCount = resultmd.length;


                                            let getDislikeCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoid + "' and `like_status` = 0";

                                            db.query(getDislikeCount, function (merr, mresult) {
                                                resp.dislikeCount = mresult.length;

                                                let queryCountChk = "SELECT * FROM `video_like_table` WHERE `user_id` = '" + userid + "'";

                                                db.query(queryCountChk, function (errcnt, resultcnt) {


                                                    var likeCountTest = resultcnt.length;


                                                    console.log(likeCountTest);

                                                    if (likeCountTest % 2 == 0) {

                                                        let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

                                                        let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;

                                                        cmd.get(
                                                            cleosWalletUnlockQuery,
                                                            function (err1, data1, stderr1) {

                                                                let sendEOSTokensRegistration = "cleos -u https://eos.greymass.com/ push action hellogoviddo transfer '{\"from\":\"hellogoviddo\", \"to\":\"" + walletName + "\", \"quantity\":\"0.01 GOV\", \"memo\":\"upvoting for 2 unique videos\"}' -p  hellogoviddo";
                                                                console.log(sendEOSTokensRegistration);
                                                                cmd.get(
                                                                    sendEOSTokensRegistration,
                                                                    function (err, data, stderr) {


                                                                        let queryInsertTransactions = "INSERT INTO `video_transactions`(`transaction_amount`, `transaction_user_id`, `transaction_memo`, `transaction_from`) VALUES ('0.01 GOV','" + userid + "','2 videos upvoting','hellogoviddo')";

                                                                        db.query(queryInsertTransactions, function (mresr, mresultmm) {

                                                                            return res.status(200).send(resp);

                                                                        });

                                                                    }
                                                                );


                                                            }
                                                        );
                                                    }


                                                });



                                            });

                                        });

                                    }

                                });


                            }
                            else {
                                let queryinsert = "UPDATE `video_like_table` SET `like_status`= '" + likedislikestatus + "' WHERE `video_id` = '" + videoid + "' and `user_id` = '" + userid + "'";

                                db.query(queryinsert, function (err, result) {

                                    if (err) {
                                        return res.status(400).send(err);
                                    }
                                    else {
                                        resp.message = "success";

                                        let getCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoid + "' and `like_status` = 1";
                                        db.query(getCount, function (errmd, resultmd) {

                                            resp.likeCount = resultmd.length;

                                            let getDislikeCount = "SELECT * FROM `video_like_table` WHERE `video_id` = '" + videoid + "' and `like_status` = 0";

                                            db.query(getDislikeCount, function (merr, mresult) {
                                                resp.dislikeCount = mresult.length;

                                                return res.status(200).send(resp);

                                            });

                                        });

                                    }

                                });

                            }







                        });


                    }

                });


            }
        })

    },


    subscriptChannel: (req, res) => {
        let emailid = req.body.emailid;
        let subscriptionstatus = req.body.subscriptionstatus;
        let video_id = req.body.videoid;
        resp = {};

        let query = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailid + "'";

        db.query(query, function (err, result) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                row = result[0];
                let userid = row.user_id;

                let selectVideoId = "SELECT * FROM `video_table` WHERE `video_id` = '" + video_id + "'";
                db.query(selectVideoId, function (err, result) {

                    if (err) {
                        return res.status(400).send(err);
                    }
                    else {

                        row = result[0];
                        let channelname = row.video_channel_name;

                        let channelidquerry = "SELECT * FROM `channel_list` WHERE `channel_name` = '" + channelname + "'";

                        db.query(channelidquerry, function (err, resultm) {

                            let channelid = resultm[0].channel_id;


                            if (subscriptionstatus == 1) {
                                let checkupdation = "SELECT * FROM `subscirption_list` WHERE `subscription_channel_id` = '" + channelid + "' and `user_id` = '" + userid + "'";
                                db.query(checkupdation, function (err, resultm) {

                                    console.log(resultm.length)

                                    if (resultm.length < 1) {
                                        let queryinsert = "INSERT INTO `subscirption_list` (`subsciption_id`, `subscription_channel_id`, `user_id`) VALUES (NULL, '" + channelid + "', '" + userid + "');";

                                        db.query(queryinsert, function (err, result) {

                                            if (err) {
                                                return res.status(400).send(err);
                                            }
                                            else {
                                                resp.message = "success";

                                                return res.status(200).send(resp);
                                            }

                                        });


                                    }
                                    else {

                                        return res.status(200).send(resp);
                                    }


                                });

                            }
                            else {

                                let deletequery = "DELETE FROM `subscirption_list` WHERE `subscription_channel_id` = '" + channelid + "' and `user_id` = '" + userid + "'";

                                db.query(deletequery, function (err, result) {

                                    if (err) {
                                        return res.status(400).send(err);
                                    }
                                    else {
                                        resp.message = "success";

                                        return res.status(200).send(resp);
                                    }

                                });

                            }


                        });


                    }

                });


            }
        })

    },


    addComment: (req, res) => {

        let emailId = req.body.emailId;
        let comment = req.body.comment;
        let video_id = req.body.video_id;
        var resp = {};

        let getUserId = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "'";

        db.query(getUserId, function (err, result) {
            var userId = result[0].user_id;


            let getVideoIdQuery = "SELECT * FROM `video_table` WHERE `video_id` = '" + video_id + "'";

            db.query(getVideoIdQuery, function (err, result) {

                var videoIdd = result[0].video_id;

                let chkQuery = "SELECT * FROM `video_comments_table` WHERE `user_id` = '" + userId + "' and `video_id` = '" + videoIdd + "'";

                db.query(chkQuery, function (errr, resulchk) {

                    if (resulchk.length > 0) {

                        let updateQuery = "UPDATE `video_comments_table` SET `comment`='" + comment + "' WHERE `user_id` = '" + userId + "' and `video_id` = '" + videoIdd + "' ";

                        console.log(updateQuery)

                        db.query(updateQuery, function (errm, resultm) {

                            if (err) {
                                return res.status(400).send(err);
                            }
                            else {
                                resp.messgae = "success";
                                return res.status(200).send(resp);
                            }

                        });


                    }
                    else {


                        let insertDataQuery = "INSERT INTO `video_comments_table` (`comment_id`, `user_id`, `video_id`, `comment`) VALUES (NULL, '" + userId + "', '" + videoIdd + "', '" + comment + "');";

                        db.query(insertDataQuery, function (errm, resultm) {

                            if (err) {
                                return res.status(400).send(err);
                            }
                            else {
                                resp.messgae = "success";
                                return res.status(200).send(resp);
                            }

                        });

                    }

                });




            });


        });

    },


    getCommentList: (req, res) => {

        let video_id = req.body.video_id;

        let getVideoIdQuery = "SELECT * FROM `video_table` WHERE `video_id` = '" + video_id + "'";
        var resp = {};

        db.query(getVideoIdQuery, function (err, result) {

            var videoId = result[0].video_id;

            let getCommentsQuery = "SELECT * FROM `video_comments_table` WHERE `video_id` = '" + videoId + "' LIMIT 10";

            db.query(getCommentsQuery, function (errr, resultgc) {

                if (errr) {
                    res.status(400).send(err);
                }
                else {

                    resp.message = "success";

                    data = [];
                    for (var i = 0; i < resultgc.length; i++) {

                        commentsData = {};

                        commentsData.comment_id = resultgc[i].comment_id;
                        commentsData.userId = resultgc[i].user_id;
                        var userIdd = resultgc[i].user_id;
                        commentsData.comment = resultgc[i].comment;



                        data.push(commentsData);

                    }
                    resp.data = data;
                    return res.status(200).send(resp);


                }

            });

        });

    },



    getPreviewData: (req, res) => {
        let previewMaxCount = req.body.previewMaxCount;
        let previewLastId = req.body.previewLastId;


        let selectSliderImagesQuery = "SELECT * FROM `video_table` WHERE video_id > " + previewLastId + " and `status` = 1 ORDER BY video_id ASC LIMIT " + previewMaxCount;

        db.query(selectSliderImagesQuery, function (err, result) {

            let resp = {};

            if (err) {
                resp.message = "failed";
                resp.data = err;
                return res.status(500).send(resp);
            }

            let data = [];
            resp.message = "success";
            for (var i = 0; i < result.length; i++) {
                previewDetails = {};

                previewDetails.video_id = result[i].video_id;
                previewDetails.slider_image = result[i].home_image;
                previewDetails.shorten_text = result[i].shorten_text;
                previewDetails.vdo_cipher_id = result[i].vdo_cipher_id;
                previewDetails.video_player_id = result[i].jw_video_id;


                data.push(previewDetails);

            }

            resp.data = data;


            return res.status(200).send(resp);


        });

    },


    registerForCrowdFunding: (req, res) => {

        let email = req.body.email;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let contactNumber = req.body.contactNumber;
        let countryName = req.body.countryName;
        let submail = req.body.submail;



        if (!email || !password || !firstName || !lastName || !contactNumber || !countryName) {
            resp.message = "Missing first name, last name, email, Country name, Contact Number or password";
            resp.status = "failed";
            return res.status(400).send(resp);
        }
        else {
            let userQuery = "SELECT * FROM user_table WHERE email_id = '" + email + "';";

            db.query(userQuery, function (err, result) {
                var resp = {};
                if (err) {
                    resp.message = err;
                    resp.status = "failed";
                    return res.status(200).send(resp);
                }
                else {


                    console.log(result.length);

                    if (result.length) {
                        resp.message = "User with this email already exists";
                        resp.status = "failed";
                        return res.status(200).send(resp);
                    } else {

                        var insertQuery = "INSERT INTO `user_table`(`first_name`, `last_name`, `email_id`, `password`, `phone_no`, `country`, `mail_subscription`) VALUES ('" + firstName + "', '" + lastName + "', '" + email + "', '" + password + "', '" + contactNumber + "', '" + countryName + "', '" + submail + "')";
                        db.query(insertQuery, function (err, result) {
                            if (err) {
                                resp.message = "Registration Failed due to database error";
                                resp.status = "failed";
                                return res.status(200).send(err);
                            }
                            else {
                                resp.message = "Registration successful";
                                resp.status = "success";

                                let selectSliderImagesQuery = "SELECT * FROM user_table WHERE email_id = '" + email + "';";

                                db.query(selectSliderImagesQuery, function (err1, result1) {
                                    resp.userid = result1[0].user_id;
                                });

                                var toEmail = email;
                                var ccEmail = "pratik@goviddo.com, mulaniimran27@gmail.com, contact@goviddo.com";
                                var subject = "Activate Your GoViddo Account";

                                var username = firstName + " " + lastName;

                                var body = '<div id=":16h" class="ii gt"><div id=":16g" class="a3s aXjCH "><div class="adM">' +
                                    '</div><table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td align="center" valign="top">' +
                                    '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td>' +
                                    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td align="left" valign="top">' +
                                    '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td align="center" valign="top" width="150">&nbsp;</td>' +
                                    '<td align="center" height="80" valign="middle" width="300"><a href="https://goviddo.com" target="_blank" ><img alt="" height="75" src="cid:unique@goviddo.igm" width="150" class="CToWUd"></a></td>' +
                                    '<td align="right" valign="top" width="150">' +
                                    '<table border="0" cellpadding="0" cellspacing="0">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td align="left" bgcolor="#E4E4E4" class="m_-6590730431353735716zero-lh" height="5" valign="top"><img alt="" height="5" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td align="center" valign="top">' +
                                    '<table border="0" cellpadding="10" cellspacing="0" width="600">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td>' +
                                    '<table border="0" cellpadding="0" cellspacing="20" width="100%">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td align="left" valign="top" width="100%">' +
                                    '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px"><span class="m_-6590730431353735716hero-title1">Welcome to GoViddo</span></span></font></p>' +
                                    '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Dear ' + username + ',</span></font></p>' +
                                    '<p><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Thank you for joining GoViddo.</span></font></p>' +
                                    '<p><a href="https://goviddo.com/thankspage.html" target="_blank" data-saferedirecturl="https://goviddo.com/thankspage.html"><font color="#333333"><img alt="" class="m_-6590730431353735716white-border-button1 CToWUd" height="35" src="https://ci3.googleusercontent.com/proxy/_8FEpQajlZp4Gzq-HQSIoE-0w0rnhzurhH0cUF2EoYk6GRnSyORG1QD8A5AQHhhsusWDo57i4HKiqZ7XDPUId7NW6-vE0kboSd65id3Xg5RbdKYydoAKqyV8vQ=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/btn-verification.png" style="border:#fff solid 1px" width="200"></font></a></p>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td align="center" valign="top">' +
                                    '<table align="center" border="0" cellpadding="10" cellspacing="0" class="m_-6590730431353735716grey-bg" width="600">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td class="m_-6590730431353735716ff m_-6590730431353735716font-size" style="padding-left:30px;padding-right:30px">' +
                                    '<hr class="m_-6590730431353735716hr">' +
                                    '<p>For any queries, write us on <a class="m_-6590730431353735716link" href="mailto:contact@goviddo.com" target="_blank">contact@goviddo.com</a></p>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '<center>' +
                                    '<table border="0" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-top:1px solid #e5e5e5" width="100%">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '<td align="center" style="padding-top:20px;padding-bottom:20px" valign="top">Copyright (C) GoViddo Ltd. All rights reserved.<br>' +
                                    '&nbsp;' +
                                    '<table border="0" cellpadding="0" cellspacing="0">' +
                                    '<tbody>' +
                                    '<tr>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</td>' +
                                    '</tr>' +
                                    '</tbody>' +
                                    '</table>' +
                                    '</center><div class="yj6qo"></div><div class="adL">' +
                                    '</div></div></div>';



                                const nodemailer = require("nodemailer");


                                var smtpTransport = nodemailer.createTransport({
                                    service: 'Gmail',
                                    auth: {
                                        user: 'contact@goviddo.com',
                                        pass: 'Contact@GoViddo'
                                    },
                                    tls: { rejectUnauthorized: false },
                                    debug: true
                                },
                                    {
                                        // default message fields

                                        // sender info
                                        from: 'GoViddo <contact@goviddo.com>',
                                        headers: {
                                            'X-Laziness-level': 1000 // just an example header, no need to use this
                                        }
                                    });

                                var mailOptions = {
                                    to: toEmail,
                                    bcc: ccEmail,
                                    subject: subject,
                                    html: body,
                                    attachments: [{
                                        filename: 'GoViddo.png',
                                        path: 'https://goviddo.com/logo/gt1.png',
                                        cid: 'unique@goviddo.igm' //same cid value as in the html img src
                                    }]
                                }


                                smtpTransport.sendMail(mailOptions, function (error, response) {
                                    if (error) {
                                        // res.end("error");
                                        resp.disp = "Mail Sent Failed...";
                                        resp.erm = error;
                                        return res.status(200).send(resp);

                                    } else {
                                        // res.end("sent");

                                        resp.disp = "Mail Sent Successfully...";
                                        return res.status(200).send(resp);

                                    }
                                });






                            }
                        });

                    }
                }
            });
        }

    },


    register: (req, res) => {
        let email = req.body.email;
        let password = req.body.password;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let walletName = req.body.walletName;

        var importKey;

        var resp = {};
        var activeKeys = {};
        var ownerKeys = {};
        if (!email || !password || !firstName || !lastName || !walletName) {

            resp.message = "Missing first name, last name, email, wallet name or password";
            return res.status(400).send(resp);


        }

        let userQuery = "SELECT * FROM user_table WHERE email_id = '" + email + "';";

        db.query(userQuery, function (err, result) {
            var resp = {};
            if (err) {
                resp.message = err;
                return res.status(200).send(resp);
            }
            else {


                console.log(result.length);

                if (result.length) {
                    resp.message = "User with this email already exists";
                    return res.status(200).send(resp);
                } else {

                    let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

                    let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;
                    let cleosCreateActiveKeys = "cleos create key --to-console";
                    let cleosCreateOwnerKeys = "cleos create key --to-console";

                    var checkWalletNamePromise = new Promise(function (resolve, reject) {
                        //to check account name avilability
                        //mainnet url
                        //let cleosCheckWalletName = "cleos -u https://eos.greymass.com/ get account " + walletName + " --json";

                        //testnet url
                        let cleosCheckWalletName = "cleos -u https://eos.greymass.com/ get account " + walletName + " --json";

                        console.log(cleosCheckWalletName);

                        cmd.get(
                            cleosCheckWalletName,
                            function (err, data, stderr) {
                                if (err == null) {
                                    resp.walletMessage = "Wallet Name Not Available";
                                    console.log("Account Name Not Avilabile" + data);
                                    reject("Account Name Not Avilabile");
                                }
                                else {
                                    resp.walletMessage = "Wallet Name Available";
                                    console.log("Wallet Name Avilabile" + err);
                                    resolve("Wallet Name Avilabile");
                                }
                            }
                        );
                    });

                    checkWalletNamePromise.catch(function () {
                        resp.message = "Wallet Not Available please try new name";
                        console.log("Promise Rejected");
                        return res.status(500).send(resp);
                    });


                    checkWalletNamePromise.then(function () {
                        return new Promise(function (resolve, reject) {
                            cmd.get(
                                cleosWalletUnlockQuery,
                                function (err, data, stderr) {
                                    if (err != null) {
                                        resp.walletUnlockingMessage = "Wallet Not Unlocked - Password is wrong";
                                        console.log("Wallet Unlocking status = " + data);
                                    }
                                    else {
                                        resp.walletUnlockingMessage = "Wallet Unlocked Successfully";
                                        console.log("Wallet Unlocking Error = " + err);
                                    }
                                    resolve(data);

                                }
                            );
                        });
                    }).then(function () {
                        return new Promise(function (resolve, reject) {
                            cmd.get(
                                cleosCreateActiveKeys,
                                function (err, data, stderr) {

                                    var arr = data.split(": ");
                                    var Key = arr[1].split("Public key");
                                    var activePrivateKey = Key[0];
                                    var activePublicKey = arr[2];
                                    var activePrivateKey = activePrivateKey.replace(/\n/g, '');
                                    var activePublicKey = activePublicKey.replace(/\n/g, '');
                                    //resp.createActiveKeyMsg = "Active Keys Created";
                                    importKey = activePrivateKey;


                                    activeKeys.activePrivateKey = activePrivateKey;
                                    activeKeys.activePublicKey = activePublicKey;

                                    resp.activePublicKey = activePublicKey;

                                    activeKeysArray = [];
                                    activeKeysArray.push(activeKeys);
                                    resp.activeKeys = activeKeysArray;

                                    console.log("Active Private Key =" + activePrivateKey);
                                    console.log("Active Public Key =" + activePublicKey);
                                    resolve(resp);
                                    cmd.get(
                                        cleosCreateOwnerKeys,
                                        function (err, data, stderr) {

                                            var arr = data.split(": ");
                                            var Key = arr[1].split("Public key");
                                            var ownerPrivateKey = Key[0];
                                            var ownerPrivateKey = ownerPrivateKey.replace(/\n/g, '');
                                            var ownerPublicKey = arr[2];
                                            var ownerPublicKey = ownerPublicKey.replace(/\n/g, '');
                                            //resp.createOwnerKeysMsg = "Owner Keys Created";

                                            ownerKeys.ownerPrivateKey = ownerPrivateKey;
                                            ownerKeys.ownerPublicKey = ownerPublicKey;

                                            ownerKeysArray = [];
                                            ownerKeysArray.push(ownerKeys);

                                            resp.ownerKeys = ownerKeysArray;

                                            console.log("Owner Private Key =" + ownerPrivateKey);
                                            console.log("Owner Public Key =" + ownerPublicKey);

                                            //mainnet account creation command
                                            //let createEOSWalletCommand = "cleos -u https://eos.greymass.com/ system newaccount hellogoviddo " + walletName + " --stake-net '0.01 EOS' --stake-cpu '0.01 EOS' --buy-ram '0.1 EOS' " + ownerPublicKey + " " + resp.activePublicKey;


                                            //testnet account creation command
                                            let createEOSWalletCommand = "cleos -u https://eos.greymass.com/ system newaccount hellogoviddo " + walletName + " --stake-net '0.01 EOS' --stake-cpu '0.01 EOS' --buy-ram '0.2 EOS' " + ownerPublicKey + " " + resp.activePublicKey;


                                            console.log('Command to be executed', createEOSWalletCommand);
                                            //execute again cmd.get and run the createWalletCommand and return onwer and active keys with wallet name to the user

                                            cmd.get(
                                                createEOSWalletCommand,
                                                function (err, data, stderr) {
                                                    console.log(err);
                                                    if (err == null) {
                                                        resp.accountCreatedMsg = "Account Created Successfully";
                                                        console.log("Account Created Successfully" + data);

                                                        // send the user's details to the database
                                                        let query = "INSERT INTO user_table (first_name, last_name, eosio_account_name, email_id, password) VALUES ('" + firstName + "', '" + lastName + "', '" + walletName + "', '" + email + "', '" + password + "')";
                                                        db.query(query, function (err, result) {
                                                            if (err) {
                                                                resp.message = "Registration Failed due to database error";
                                                                return res.status(200).send(err);
                                                            }
                                                            resp.message = "Registration successful";

                                                            var toEmail = email;
                                                            var ccEmail = "pratik@goviddo.com, mulaniimran27@gmail.com, contact@goviddo.com";
                                                            var subject = "Activate Your GoViddo Account";

                                                            var username = firstName + " " + lastName;

                                                            var body = '<div id=":16h" class="ii gt"><div id=":16g" class="a3s aXjCH "><div class="adM">' +
                                                                '</div><table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td align="center" valign="top">' +
                                                                '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td>' +
                                                                '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td align="left" valign="top">' +
                                                                '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td align="center" valign="top" width="150">&nbsp;</td>' +
                                                                '<td align="center" height="80" valign="middle" width="300"><a href="https://goviddo.com" target="_blank" ><img alt="" height="75" src="cid:unique@goviddo.igm" width="150" class="CToWUd"></a></td>' +
                                                                '<td align="right" valign="top" width="150">' +
                                                                '<table border="0" cellpadding="0" cellspacing="0">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '<tr>' +
                                                                '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                                                '</tr>' +
                                                                '<tr>' +
                                                                '<td align="left" bgcolor="#E4E4E4" class="m_-6590730431353735716zero-lh" height="5" valign="top"><img alt="" height="5" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                                                '</tr>' +
                                                                '<tr>' +
                                                                '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '<tr>' +
                                                                '<td align="center" valign="top">' +
                                                                '<table border="0" cellpadding="10" cellspacing="0" width="600">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td>' +
                                                                '<table border="0" cellpadding="0" cellspacing="20" width="100%">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td align="left" valign="top" width="100%">' +
                                                                '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px"><span class="m_-6590730431353735716hero-title1">Welcome to GoViddo</span></span></font></p>' +
                                                                '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Dear ' + username + ',</span></font></p>' +
                                                                '<p><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Thank you for joining GoViddo.</span></font></p>' +
                                                                '<p><a href="https://goviddo.com/thankspage.html" target="_blank" data-saferedirecturl="https://goviddo.com/thankspage.html"><font color="#333333"><img alt="" class="m_-6590730431353735716white-border-button1 CToWUd" height="35" src="https://ci3.googleusercontent.com/proxy/_8FEpQajlZp4Gzq-HQSIoE-0w0rnhzurhH0cUF2EoYk6GRnSyORG1QD8A5AQHhhsusWDo57i4HKiqZ7XDPUId7NW6-vE0kboSd65id3Xg5RbdKYydoAKqyV8vQ=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/btn-verification.png" style="border:#fff solid 1px" width="200"></font></a></p>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '<tr>' +
                                                                '<td align="center" valign="top">' +
                                                                '<table align="center" border="0" cellpadding="10" cellspacing="0" class="m_-6590730431353735716grey-bg" width="600">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td class="m_-6590730431353735716ff m_-6590730431353735716font-size" style="padding-left:30px;padding-right:30px">' +
                                                                '<hr class="m_-6590730431353735716hr">' +
                                                                '<p>For any queries, write us on <a class="m_-6590730431353735716link" href="mailto:contact@goviddo.com" target="_blank">contact@goviddo.com</a></p>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '<center>' +
                                                                '<table border="0" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-top:1px solid #e5e5e5" width="100%">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '<td align="center" style="padding-top:20px;padding-bottom:20px" valign="top">Copyright (C) GoViddo Ltd. All rights reserved.<br>' +
                                                                '&nbsp;' +
                                                                '<table border="0" cellpadding="0" cellspacing="0">' +
                                                                '<tbody>' +
                                                                '<tr>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</td>' +
                                                                '</tr>' +
                                                                '</tbody>' +
                                                                '</table>' +
                                                                '</center><div class="yj6qo"></div><div class="adL">' +
                                                                '</div></div></div>';



                                                            const nodemailer = require("nodemailer");


                                                            var smtpTransport = nodemailer.createTransport({
                                                                service: 'Gmail',
                                                                auth: {
                                                                    user: 'contact@goviddo.com',
                                                                    pass: 'Contact@GoViddo'
                                                                },
                                                                tls: { rejectUnauthorized: false },
                                                                debug: true
                                                            },
                                                                {
                                                                    // default message fields

                                                                    // sender info
                                                                    from: 'GoViddo <contact@goviddo.com>',
                                                                    headers: {
                                                                        'X-Laziness-level': 1000 // just an example header, no need to use this
                                                                    }
                                                                });

                                                            var mailOptions = {
                                                                to: toEmail,
                                                                bcc: ccEmail,
                                                                subject: subject,
                                                                html: body,
                                                                attachments: [{
                                                                    filename: 'GoViddo.png',
                                                                    path: 'https://goviddo.com/logo/gt1.png',
                                                                    cid: 'unique@goviddo.igm' //same cid value as in the html img src
                                                                }]
                                                            }


                                                            smtpTransport.sendMail(mailOptions, function (error, response) {
                                                                if (error) {
                                                                    // res.end("error");
                                                                } else {
                                                                    // res.end("sent");
                                                                }
                                                            });



                                                            let sendEOSTokensRegistration = "cleos -u https://eos.greymass.com/ push action hellogoviddo transfer '{\"from\":\"hellogoviddo\", \"to\":\"" + walletName + "\", \"quantity\":\"0.01 GOV\", \"memo\":\"Reward for register with goviddo\"}' -p  hellogoviddo";
                                                            console.log(sendEOSTokensRegistration);
                                                            cmd.get(
                                                                sendEOSTokensRegistration,
                                                                function (err, data, stderr) {

                                                                    let importKeysCommand = "cleos -u https://eos.greymass.com/ wallet import --private-key " + activeKeys.activePrivateKey;
                                                                    cmd.get(
                                                                        importKeysCommand,
                                                                        function (err, data, stderr) {

                                                                        });


                                                                    let chkingQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + email + "'";

                                                                    console.log(chkingQuery)

                                                                    db.query(chkingQuery, function (mern, mresn) {

                                                                        var userId = mresn[0].user_id;

                                                                        console.log(userId);

                                                                        let queryInsertTransactions = "INSERT INTO `video_transactions`(`transaction_amount`, `transaction_user_id`, `transaction_memo`, `transaction_from`) VALUES ('0.01 GOV','" + userId + "','For Registration of New User','hellogoviddo')";

                                                                        db.query(queryInsertTransactions, function (mresr, mresultmm) {

                                                                            return res.status(200).send(resp);

                                                                        });

                                                                    });

                                                                }
                                                            );



                                                        });

                                                    }
                                                    else {
                                                        resp.accountCreatedMsg = "Account creation failed " + createEOSWalletCommand;
                                                        console.log("Account creation failed" + err);
                                                        return res.status(200).send(resp);

                                                    }
                                                }
                                            );


                                            resolve(resp);

                                        }
                                    );

                                }
                            )
                        })
                    });
                }

            }

        });
    },

    updateApp: (req, res) => {

        data = {
            "is_run_mode": "true",
            "name": "GoViddo AndroidAppUpdater",
            "uri_current": "blockchainvideoapp.com.goviddo.goviddo",
            "version_code_current": 11,
            "version_code_min": 1,
            "update_info": "In version 1.11 EOS Account Creation Option Added",
            "update_date": "19/06/2019"
        };

        return res.status(200).send(data);

    },


    getUserInfoForAccount: (req, res) => {


        let emailId = req.body.emailId;

        let resp = {};

        let userDetailsQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "'";

        db.query(userDetailsQuery, function (err, result) {

            resp.user_id = result[0].user_id;
            resp.first_name = result[0].first_name;
            resp.last_name = result[0].last_name;
            resp.email_id = result[0].email_id;
            resp.eosio_account_name = result[0].eosio_account_name;
            resp.gender = result[0].gender;
            resp.phone_no = result[0].phone_no;
            resp.birth_date = result[0].birth_date;
            resp.address = result[0].address;
            resp.country = result[0].country;
            resp.user_video_choice = result[0].user_video_choice;
            resp.user_profile_picture = result[0].user_profile_picture;
            resp.notification_token = result[0].notification_token;
            resp.register_as_advisor = result[0].register_as_advisor;
            resp.register_as_producer = result[0].register_as_producer;
            resp.registration_date = result[0].registration_date;
            resp.status = result[0].status;

            return res.status(200).send(resp);


        });

    },









    generateVideoOtp: (req, res) => {
        let urlPath = req.originalUrl;

        let arr = urlPath.split("=", -1);
        let videoId = arr[1];

        var request = require("request");

        var options = {
            method: 'POST',
            url: 'https://dev.vdocipher.com/api/videos/' + videoId + '/otp',
            headers:
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Apisecret 8522c382576c20779b543c305ada4a1459323eeba69604ab06410536f03ad718'
            },
            body: { ttl: 300 },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log(body);
            return res.status(200).send(body);
        });

    },

    getUserProfilePics: (req, res) => {

        let userId = req.body.userId;
        let comment = req.body.comment;
        let commentId = req.body.commentId;

        resp = {};

        let userDetailsQuery = "SELECT * FROM `user_table` WHERE `user_id` = '" + userId + "'";

        db.query(userDetailsQuery, function (err, result) {

            if (err) {
                return res.status(400).send(err);
            }
            else {
                resp.profilPic = result[0].user_profile_picture;
                resp.userName = result[0].first_name + " " + result[0].last_name;
                resp.comment = comment;
                resp.commentId = commentId;
                resp.userId = userId;

                return res.status(200).send(resp);
            }

        });

    },




    createEosMainNetWallet: (req, res) => {

        let walletName = req.body.walletName;
        var resp = {};
        var activeKeys = {};
        var ownerKeys = {};


        let walletPassword = "PW5HqSmh2xHsgfZLQvS4oR225NryhsTx3Zc27ojKv3m1D8Wwtn7Ah";

        let cleosWalletUnlockQuery = "cleos wallet unlock -n goviddowallet --password " + walletPassword;
        let cleosCreateActiveKeys = "cleos create key --to-console";
        let cleosCreateOwnerKeys = "cleos create key --to-console";

        var checkWalletNamePromise = new Promise(function (resolve, reject) {
            //to check account name avilability
            //mainnet url
            //let cleosCheckWalletName = "cleos -u https://eos.greymass.com/ get account " + walletName + " --json";

            //testnet url
            let cleosCheckWalletName = "cleos -u https://eos.greymass.com/ get account " + walletName + " --json";


            cmd.get(
                cleosCheckWalletName,
                function (err, data, stderr) {
                    if (err == null) {
                        resp.walletMessage = "Wallet Name Not Available";
                        console.log("Account Name Not Avilabile" + data);
                        reject("Account Name Not Avilabile");
                    }
                    else {
                        resp.walletMessage = "Wallet Name Available";
                        console.log("Wallet Name Avilabile" + err);
                        resolve("Wallet Name Avilabile");
                    }
                }
            );
        });

        checkWalletNamePromise.catch(function () {
            resp.message = "Wallet Not Available please try new name";
            console.log("Promise Rejected");
            return res.status(500).send(resp);
        });


        checkWalletNamePromise.then(function () {
            return new Promise(function (resolve, reject) {
                cmd.get(
                    cleosWalletUnlockQuery,
                    function (err, data, stderr) {
                        if (err != null) {
                            resp.walletUnlockingMessage = "Wallet Not Unlocked - Password is wrong";
                            console.log("Wallet Unlocking status = " + data);
                        }
                        else {
                            resp.walletUnlockingMessage = "Wallet Unlocked Successfully";
                            console.log("Wallet Unlocking Error = " + err);
                        }
                        resolve(data);


                    }
                );
            });
        }).then(function () {
            return new Promise(function (resolve, reject) {
                cmd.get(
                    cleosCreateActiveKeys,
                    function (err, data, stderr) {

                        var arr = data.split(": ");
                        var Key = arr[1].split("Public key");
                        var activePrivateKey = Key[0];
                        var activePublicKey = arr[2];
                        var activePrivateKey = activePrivateKey.replace(/\n/g, '');
                        var activePublicKey = activePublicKey.replace(/\n/g, '');
                        //resp.createActiveKeyMsg = "Active Keys Created";


                        activeKeys.activePrivateKey = activePrivateKey;
                        activeKeys.activePublicKey = activePublicKey;

                        resp.activePublicKey = activePublicKey;

                        activeKeysArray = [];
                        activeKeysArray.push(activeKeys);
                        resp.activeKeys = activeKeysArray;

                        console.log("Active Private Key =" + activePrivateKey);
                        console.log("Active Public Key =" + activePublicKey);
                        resolve(resp);

                    }
                )
            })
        }).then(function (resp) {
            return new Promise(function (resolve, reject) {
                cmd.get(
                    cleosCreateOwnerKeys,
                    function (err, data, stderr) {

                        var arr = data.split(": ");
                        var Key = arr[1].split("Public key");
                        var ownerPrivateKey = Key[0];
                        var ownerPrivateKey = ownerPrivateKey.replace(/\n/g, '');
                        var ownerPublicKey = arr[2];
                        var ownerPublicKey = ownerPublicKey.replace(/\n/g, '');
                        //resp.createOwnerKeysMsg = "Owner Keys Created";

                        ownerKeys.ownerPrivateKey = ownerPrivateKey;
                        ownerKeys.ownerPublicKey = ownerPublicKey;

                        ownerKeysArray = [];
                        ownerKeysArray.push(ownerKeys);

                        resp.ownerKeys = ownerKeysArray;

                        console.log("Owner Private Key =" + ownerPrivateKey);
                        console.log("Owner Public Key =" + ownerPublicKey);

                        //mainnet account creation command
                        //let createEOSWalletCommand = "cleos -u https://eos.greymass.com/ system newaccount hellogoviddo " + walletName + " --stake-net '0.01 EOS' --stake-cpu '0.01 EOS' --buy-ram '0.1 EOS' " + ownerPublicKey + " " + resp.activePublicKey;


                        //testnet account creation command
                        let createEOSWalletCommand = "cleos -u https://eos.greymass.com/ system newaccount hellogoviddo " + walletName + " --stake-net '0.01 EOS' --stake-cpu '0.01 EOS' --buy-ram '0.2 EOS' " + ownerPublicKey + " " + resp.activePublicKey;


                        console.log('Command to be executed', createEOSWalletCommand);
                        //execute again cmd.get and run the createWalletCommand and return onwer and active keys with wallet name to the user

                        cmd.get(
                            createEOSWalletCommand,
                            function (err, data, stderr) {
                                if (err == null) {
                                    resp.accountCreatedMsg = "Account Created Successfully";
                                    console.log("Account Created Successfully" + data);
                                }
                                else {
                                    resp.accountCreatedMsg = "Account creation failed";
                                    console.log("Account creation failed" + err);
                                }
                            }
                        );


                        resolve(resp);

                    }
                );
            })
        }).then(function (resp) {
            // send the user's details to the database
            resp.message = "success";
            return res.status(200).send(resp);

        });

    },

    shareUrl: (req, res) => {

        let urlPath = req.originalUrl;

        let arr = urlPath.split("=", -1);
        let videoId = arr[1];


        var express = require('express');
        var deeplink = require('node-deeplink');

        var app = express();

        app.get(
            '/deeplink',
            deeplink({
                fallback: 'https://goviddo.com',
                android_package_name: 'com.imfapp.dell.mytabsapp',
                ios_store_link:
                    'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4'
            })
        );

        // Windows Phone must come first because its UA also contains "Android"

        //window.location.href= "market://details?id=com.imfapp.dell.mytabsapp";
        return res.status(200).send("success");

    },

    sendEmail: (req, res) => {
        var toEmail = 'mulaniimran97@gmail.com';
        var ccEmail = "pratik@goviddo.com, mulaniimran27@gmail.com, contact@goviddo.com";
        var subject = "Activate Your GoViddo Account";

        var username = "Imran Mulani";

        var body = '<div id=":16h" class="ii gt"><div id=":16g" class="a3s aXjCH "><div class="adM">' +
            '</div><table border="0" cellpadding="0" cellspacing="0" width="100%">' +
            '<tbody>' +
            '<tr>' +
            '<td align="center" valign="top">' +
            '<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
            '<tbody>' +
            '<tr>' +
            '<td align="left" valign="top">' +
            '<table border="0" cellpadding="0" cellspacing="0" width="100%">' +
            '<tbody>' +
            '<tr>' +
            '<td align="center" valign="top" width="150">&nbsp;</td>' +
            '<td align="center" height="80" valign="middle" width="300"><a href="https://goviddo.com" target="_blank" ><img alt="" height="75" src="cid:unique@goviddo.igm" width="150" class="CToWUd"></a></td>' +
            '<td align="right" valign="top" width="150">' +
            '<table border="0" cellpadding="0" cellspacing="0">' +
            '<tbody>' +
            '<tr>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
            '</tr>' +
            '<tr>' +
            '<td align="left" bgcolor="#E4E4E4" class="m_-6590730431353735716zero-lh" height="5" valign="top"><img alt="" height="5" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
            '</tr>' +
            '<tr>' +
            '<td align="left" height="10" valign="top"><img alt="" height="1" src="https://ci5.googleusercontent.com/proxy/1CXwvAecP28cUqf8xbVYCJBCNFGxwXyzIpwM6GVCUUJ8kBccGK0pxoAGAOWxRv0soFYr3rmDcVD0LxT-0zL_wcayUbpmKB45u002MiuffBWu=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/spacer.gif" width="1" class="CToWUd"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td align="center" valign="top">' +
            '<table border="0" cellpadding="10" cellspacing="0" width="600">' +
            '<tbody>' +
            '<tr>' +
            '<td>' +
            '<table border="0" cellpadding="0" cellspacing="20" width="100%">' +
            '<tbody>' +
            '<tr>' +
            '<td align="left" valign="top" width="100%">' +
            '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px"><span class="m_-6590730431353735716hero-title1">Welcome to GoViddo</span></span></font></p>' +
            '<p class="m_-6590730431353735716font m_-6590730431353735716lh"><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Dear ' + username + ',</span></font></p>' +
            '<p><font color="#333333" face="sans-serif, Arial, Verdana, Trebuchet MS"><span style="font-size:14px;line-height:20.8px">Thank you for joining GoViddo.</span></font></p>' +
            '<p><a href="https://goviddo.com/thankspage.html" target="_blank" data-saferedirecturl="https://goviddo.com/thankspage.html"><font color="#333333"><img alt="" class="m_-6590730431353735716white-border-button1 CToWUd" height="35" src="https://ci3.googleusercontent.com/proxy/_8FEpQajlZp4Gzq-HQSIoE-0w0rnhzurhH0cUF2EoYk6GRnSyORG1QD8A5AQHhhsusWDo57i4HKiqZ7XDPUId7NW6-vE0kboSd65id3Xg5RbdKYydoAKqyV8vQ=s0-d-e1-ft#https://www.indianmoviefriend.com/images/email_icon/btn-verification.png" style="border:#fff solid 1px" width="200"></font></a></p>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td align="center" valign="top">' +
            '<table align="center" border="0" cellpadding="10" cellspacing="0" class="m_-6590730431353735716grey-bg" width="600">' +
            '<tbody>' +
            '<tr>' +
            '<td class="m_-6590730431353735716ff m_-6590730431353735716font-size" style="padding-left:30px;padding-right:30px">' +
            '<hr class="m_-6590730431353735716hr">' +
            '<p>For any queries, write us on <a class="m_-6590730431353735716link" href="mailto:contact@goviddo.com" target="_blank">contact@goviddo.com</a></p>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<center>' +
            '<table border="0" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-top:1px solid #e5e5e5" width="100%">' +
            '<tbody>' +
            '<tr>' +
            '<td align="center" style="padding-top:20px;padding-bottom:20px" valign="top">Copyright (C) GoViddo Ltd. All rights reserved.<br>' +
            '&nbsp;' +
            '<table border="0" cellpadding="0" cellspacing="0">' +
            '<tbody>' +
            '<tr>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</center><div class="yj6qo"></div><div class="adL">' +
            '</div></div></div>';



        const nodemailer = require("nodemailer");


        var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'contact@goviddo.com',
                pass: 'Contact@GoViddo'
            },
            tls: { rejectUnauthorized: false },
            debug: true
        },
            {
                // default message fields

                // sender info
                from: 'GoViddo <contact@goviddo.com>',
                headers: {
                    'X-Laziness-level': 1000 // just an example header, no need to use this
                }
            });

        var mailOptions = {
            to: toEmail,
            bcc: ccEmail,
            subject: subject,
            html: body,
            attachments: [{
                filename: 'GoViddo.png',
                path: 'https://goviddo.com/logo/gt1.png',
                cid: 'unique@goviddo.igm' //same cid value as in the html img src
            }]
        }

        var resp = {};

        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                // res.end("error");
                resp.msg = "error";
                return res.status(500).send(resp);
            } else {
                // res.end("sent");
                resp.msg = "success";
                return res.status(200).send(resp);
            }
        });



    },


    crowdConfig: (req, res) => {
        // An example to read config from a JSON file
        // const fs = require('fs');
        // fs.readFile('mockData.json', (err, data) => {
        //     if (err) res.status(500).send(err);
        //     res.status(200).send(JSON.parse(data));
        // });

        let configQuery = "SELECT * FROM `video_genere_table` WHERE `crowd_fund_status` = '1'";

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.catid = result[i].video_genere_id;
                details.catname = result[i].video_genere_name;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },


    crowdRelatedGeneres: (req, res) => {

        let selectedMainCategoryId = req.body.maincatid;

        let configQuery = "SELECT * FROM `crowd_funding_category_list` WHERE `crowd_fund_cat_status` = '1' and `related_genere_id` = '" + selectedMainCategoryId + "'";

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.catid_related = result[i].crowd_fund_cat_id;
                details.catname_related = result[i].crowd_funding_category_name;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },


    subGenereList: (req, res) => {


        let genereIdForSubGenere = req.body.genereIdForSubGenere;
        let configQuery = "SELECT * FROM `subgenere_table` WHERE `sub_genere_status` = '1' and `related_genere_id` = '" + genereIdForSubGenere + "'";

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.sub_genre_id = result[i].sub_genre_id;
                details.sub_genere_name = result[i].sub_genere_name;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },


    crowdFundingMainCategoriesForMovies: (req, res) => {
        // An example to read config from a JSON file
        // const fs = require('fs');
        // fs.readFile('mockData.json', (err, data) => {
        //     if (err) res.status(500).send(err);
        //     res.status(200).send(JSON.parse(data));
        // });

        let configQuery = "SELECT * FROM `video_genere_table` WHERE `crowd_fund_status` = '1'";

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.maincatid = result[i].video_genere_id;
                details.maincatname = result[i].video_genere_name;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },

    getIndexProjectList: (req, res) => {

        let configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` WHERE `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1' ORDER BY RAND() LIMIT 10";

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.crowdfund_project_id = result[i].crowdfund_project_id;

                details.crowdfund_project_title = result[i].crowdfund_project_title;
                details.crowdfund_short_description = result[i].crowdfund_short_description;
                details.crowdfund_project_logo = result[i].crowdfund_project_logo;
                details.crowdfund_project_banner_image = result[i].crowdfund_project_banner_image;
                details.crowdfund_project_idea_description = result[i].crowdfund_project_idea_description;
                details.crowdfund_project_idea_video_url = result[i].crowdfund_project_idea_video_url;
                details.crowdfund_team_details_array = result[i].crowdfund_teal_details_array;
                details.crowdfund_documents_pdf_list = result[i].crowdfund_documents_pdf_list;
                details.crowdfund_total_target = result[i].crowdfund_total_target;
                details.crowdfund_total_raised = result[i].crowdfund_total_raised;
                details.crowdfund_number_of_investors = result[i].crowdfund_number_of_investors;
                details.crowdfund_project_category_details = result[i].crowdfund_project_category_details;
                details.crowd_funding_category_name = result[i].crowd_funding_category_name;
                details.crodfund_project_upload_date = result[i].crodfund_project_upload_date;
                details.crowdfund_project_approval = result[i].crowdfund_project_approval;
                details.crowdfund_project_status = result[i].crowdfund_project_status;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },




    singleProjectPage: (req, res) => {

        let projectId = req.body.proid;
        var configQuery = "";
        configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` INNER JOIN video_genere_table as vgt ON vgt.video_genere_id = cfcl.`related_genere_id` INNER JOIN user_table as cud ON cud.user_id = cpd.`userid_given_by` WHERE `crowdfund_project_id` = '67' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1'";
        if (projectId == 0) {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` INNER JOIN video_genere_table as vgt ON vgt.video_genere_id = cfcl.`related_genere_id` INNER JOIN user_table as cud ON cud.user_id = cpd.`userid_given_by` WHERE `crowdfund_project_id` = '67' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1'";
        }
        else {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` INNER JOIN video_genere_table as vgt ON vgt.video_genere_id = cfcl.`related_genere_id` INNER JOIN user_table as cud ON cud.user_id = cpd.`userid_given_by` WHERE `crowdfund_project_id` = '" + projectId + "' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1'";
        }

        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];


            for (var i = 0; i < result.length; i++) {

                var details = {};


                details.crowdfund_project_id = result[i].crowdfund_project_id;

                details.crowdfund_project_title = result[i].crowdfund_project_title;
                details.crowdfund_short_description = result[i].crowdfund_short_description;
                details.crowdfund_project_logo = result[i].crowdfund_project_logo;
                details.crowdfund_project_banner_image = result[i].crowdfund_project_banner_image;
                details.crowdfund_project_idea_description = result[i].crowdfund_project_idea_description;
                details.crowdfund_project_idea_video_url = result[i].crowdfund_project_idea_video_url;
                details.crowdfund_team_details_array = result[i].crowdfund_teal_details_array;
                details.crowdfund_documents_pdf_list = result[i].crowdfund_documents_pdf_list;
                details.crowdfund_total_target = result[i].crowdfund_total_target;
                details.crowdfund_total_raised = result[i].crowdfund_total_raised;
                details.crowdfund_number_of_investors = result[i].crowdfund_number_of_investors;
                details.crowdfund_project_category_details = result[i].crowdfund_project_category_details;
                details.crowd_funding_category_name = result[i].crowd_funding_category_name;
                details.crodfund_project_upload_date = result[i].crodfund_project_upload_date;
                details.crowdfund_project_approval = result[i].crowdfund_project_approval;
                details.crowdfund_project_status = result[i].crowdfund_project_status;
                details.project_given_by = result[i].project_given_by;
                details.roi = result[i].roi;
                details.tax_benefits = result[i].tax_benefits;
                details.crowdfund_project_category_details_name = result[i].crowdfund_project_category_details_name;
                details.video_genere_name = result[i].crowdfund_project_category_details_name;
                details.sub_genere_category_name = result[i].sub_genere_category_name;
                details.sub_genere_id = result[i].sub_genere_id;
                details.other_benefits = result[i].other_benefits;
                details.pro_usp = result[i].pro_usp;
                details.crowdfund_cast_details_array = result[i].crowdfund_cast_details_array;


                details.news_description = result[i].news_description;
                details.news_image = result[i].news_image;
                details.news_redirection = result[i].news_redirection;

                details.banner_text_color = result[i].banner_text_color;



                details.project_given_by_user_id = result[i].email_id;

                details.select_main_cat = result[i].project_main_category_details_config;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },


    updatePitchDetails: (req, res) => {
        let projecttitle = req.body.projecttitle;
        let selectedradio = req.body.selectedradio;
        let project_short_description = req.body.project_short_description;

        let projectlogo_url = req.body.projectlogo_url;
        let project_banner_img_url = req.body.project_banner_img_url;
        let project_idea = req.body.project_idea;
        let videolink = req.body.videolink;
        let arrayForTeam = req.body.arrayForTeam;

        let arrayForCasting = req.body.arrayForCasting;


        let documents_pdf_urls = req.body.documents_pdf_urls;
        let useridformypitch = req.body.useridformypitch;
        let select_category = req.body.select_category;
        let crowdfund_total_target = req.body.crowdfund_total_target;



        let taxbenifites = req.body.taxbenifites;
        let roi = req.body.roi;
        let other_benefits = req.body.other_benefits;
        let crowdfund_total_raised_amount = req.body.crowdfund_total_raised_amount;
        let select_category_text = req.body.select_category_text;
        let projectgenere = req.body.projectgenere;

        let usp_pro = req.body.usp_pro;


        let updatepitchid = req.body.updatepitchid;

        var queryUpdate = "UPDATE `crowdfund_project_details` SET `crowdfund_cast_details_array` = '" + arrayForCasting + "', `pro_usp` = '" + usp_pro + "', `crowdfund_project_category_details_name` = '" + projectgenere + "', `other_benefits` = '" + other_benefits + "', `tax_benefits` = '" + taxbenifites + "', `roi` = '" + roi + "', `crowdfund_total_raised` = '" + crowdfund_total_raised_amount + "', `crowdfund_project_title`='" + projecttitle + "',`crowdfund_short_description`='" + project_short_description + "',`project_given_by`='" + selectedradio + "',`crowdfund_project_logo`='" + projectlogo_url + "',`crowdfund_project_banner_image`='" + project_banner_img_url + "',`crowdfund_project_idea_description`='" + project_idea + "',`crowdfund_project_idea_video_url`='" + videolink + "',`crowdfund_teal_details_array`='" + arrayForTeam + "',`crowdfund_documents_pdf_list`='" + documents_pdf_urls + "',`crowdfund_total_target`='" + crowdfund_total_target + "',`crowdfund_project_category_details`='" + select_category + "' WHERE `crowdfund_project_id` = '" + updatepitchid + "'";
        var resp = {};
        resp.status = "success";
        resp.query = queryUpdate;

        db.query(queryUpdate, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(resp);
        });

    },


    uploadProjectDetails: (req, res) => {

        let projecttitle = req.body.projecttitle;
        let selectedradio = req.body.selectedradio;
        let project_short_description = req.body.project_short_description;

        let projectlogo_url = req.body.projectlogo_url;
        let project_banner_img_url = req.body.project_banner_img_url;
        let project_idea = req.body.project_idea;
        let videolink = req.body.videolink;
        let arrayForTeam = req.body.arrayForTeam;
        let documents_pdf_urls = req.body.documents_pdf_urls;
        let useridformypitch = req.body.useridformypitch;
        let select_category = req.body.select_category;
        let crowdfund_total_target = req.body.crowdfund_total_target;
        let crowdfund_project_category_details_name = req.body.selected_genere_name_send;


        let newmaincatid = req.body.newmaincatid;

        let crowdfund_total_raised_amount = req.body.crowdfund_total_raised_amount;
        let roi = req.body.roi;
        let taxbenifites = req.body.taxbenifites;
        let other_benefits = req.body.other_benefits;


        let selectedSubGenere = req.body.selectedSubGenere;
        let selectedSubGenereId = req.body.selectedSubGenereId;

        let pro_usp = req.body.pro_usp;

        let arrayForCasting = req.body.arrayForCasting;




        var configQuery = "";

        console.log(req.body.arrayForTeam);
        console.log(req.body.documents_pdf_urls);

        configQuery = "INSERT INTO `crowdfund_project_details`(`crowdfund_cast_details_array`, `pro_usp`, `userid_given_by`, `crowdfund_project_title`,`project_given_by`,  `crowdfund_short_description`, `crowdfund_project_logo`, `crowdfund_project_banner_image`, `crowdfund_project_idea_description`, `crowdfund_project_idea_video_url`, `crowdfund_teal_details_array`, `crowdfund_documents_pdf_list`, `crowdfund_total_target`, `crowdfund_total_raised`, `crowdfund_number_of_investors`, `crowdfund_project_category_details`, `project_main_category_details_config`, `roi`, `tax_benefits`, `crowdfund_project_category_details_name`, `sub_genere_category_name`, `sub_genere_id`, `other_benefits`) VALUES ('" + arrayForCasting + "', '" + pro_usp + "', '" + useridformypitch + "','" + projecttitle + "', '" + selectedradio + "', '" + project_short_description + "', '" + projectlogo_url + "', '" + project_banner_img_url + "', '" + project_idea + "', '" + videolink + "', '" + arrayForTeam + "', '" + documents_pdf_urls + "', '" + crowdfund_total_target + "', '" + crowdfund_total_raised_amount + "','0','" + select_category + "', '" + newmaincatid + "', '" + roi + "', '" + taxbenifites + "', '" + crowdfund_project_category_details_name + "', '" + selectedSubGenere + "', '" + selectedSubGenereId + "', '" + other_benefits + "')";


        var resp = {};
        resp.status = "success";

        console.log(configQuery);

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(resp);
        });
    },


    uploadMyPitchUserDetails: (req, res) => {

        let full_name = req.body.full_name;
        let emailid = req.body.emailid;
        let password = req.body.password;

        let dob = req.body.dob;
        let account_holder_type = req.body.account_holder_type;;

        var configQuery = "";
        var resp = {};


        var queryCheck = "SELECT * FROM `crowdfund_user_details` WHERE `crowdfund_user_email` = '" + emailid + "'";
        db.query(queryCheck, function (err, result) {
            if (err) {
                resp.message = err;
                return res.status(200).send(resp);
            }
            else {


                console.log(result.length); full_name

                if (result.length) {
                    resp.status = "failed";
                    resp.message = "User with this email already exists";
                    return res.status(200).send(resp);
                } else {
                    configQuery = "INSERT INTO `crowdfund_user_details`(`crowd_fund_user_full_name`, `crowdfund_user_email`, `crowdfund_user_password`, `crowdfund_user_dob`, `crowdfund_user_type`) VALUES ('" + full_name + "', '" + emailid + "', '" + password + "', '" + dob + "', '" + account_holder_type + "')";



                    console.log(configQuery);

                    db.query(configQuery, function (err, result) {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        resp.status = "success";
                        resp.userid = result.insertId;
                        return res.status(200).send(resp);
                    });

                }
            }
        });


    },



    updateCrowdFundProfile: (req, res) => {
        let emailId = req.body.userEmailId;
        let userId = req.body.userid;
        let fullName = req.body.fullname;
        let dob = req.body.dob;
        let eoswalletnamesend = req.body.eoswalletname;
        var configQuery = "";

        var resp = {};

        resp.eoswalletnamesend = eoswalletnamesend;



        var testQuery = "SELECT * FROM `user_table` WHERE `user_id` = '" + userId + "'";
        db.query(testQuery, function (err, result) {
            var oldEmail = result[0].crowdfund_user_email;


            if (oldEmail != emailId) {
                var checkNewEmail = "SELECT * FROM `user_table` WHERE `crowdfund_user_email` = '" + emailId + "'";
                db.query(checkNewEmail, function (err1, result1) {
                    if (err1) {
                        return res.status(500).send(err1);
                    }
                    else {
                        if (result1.length > 0) {
                            resp.status = "failed";
                            resp.msg = "This email id is already is in use, please try other email id";
                            return res.status(200).send(resp);
                        }
                        else {
                            configQuery = "UPDATE `user_table` SET `eos_wallet_name`='" + eoswalletnamesend + "', `first_name`='" + fullName + "',`crowdfund_user_email`='" + emailId + "',`crowdfund_user_dob`='" + dob + "' WHERE `crowdfun_user_id` = '" + userId + "'";
                            resp.query = configQuery;
                            db.query(configQuery, function (err2, result2) {
                                resp.status = "success";
                                //resp.result = result2;
                                resp.msg = "Profile updated successfully";
                                return res.status(200).send(resp);
                            });
                        }
                    }
                });
            }
            else {
                configQuery = "UPDATE `user_table` SET `first_name`='" + fullName + "',`crowdfund_user_email`='" + emailId + "',`crowdfund_user_dob`='" + dob + "' WHERE `user_id` = '" + userId + "'";
                db.query(configQuery, function (err2, result2) {
                    resp.status = "success";
                    resp.msg = "Profile updated successfully";
                    return res.status(200).send(resp);
                });
            }

        });

    },

    editCrowdFundProfile: (req, res) => {

        let emailId = req.body.userEmailId;
        let userId = req.body.userid;
        var configQuery = "";

        configQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "' and `user_id` = '" + userId + "' and `status` = '1'";


        var resp = {};
        resp.status = "success";

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.crowdfun_user_id = result[i].user_id;

                details.crowd_fund_user_full_name = result[i].first_name + " " + result[i].last_name;
                details.first_name = result[i].first_name;
                details.last_name = result[i].last_name;
                details.crowdfund_user_email = result[i].email_id;

                details.crowdfund_user_password = result[i].password;
                details.phone_no = result[i].phone_no;
                details.country = result[i].country;

                details.crowdfund_user_dob = result[i].birth_date;
                details.eos_wallet_name = result[i].eosio_account_name;



                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });

    },





    getAllDataWithCatIdForSpecificUser: (req, res) => {

        let categoryId = req.body.catid;
        let userId = req.body.userid;
        var configQuery = "";
        if (categoryId == 0) {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` WHERE `userid_given_by` = '" + userId + "' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1' ORDER BY RAND() LIMIT 1";
        }
        else {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` WHERE `userid_given_by` = '" + userId + "' and `project_main_category_details_config` = '" + categoryId + "' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1'";
        }

        var resp = {};
        resp.status = "success";
        resp.catidreturn = categoryId;

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.crowdfund_project_id = result[i].crowdfund_project_id;
                details.banner_other_data = result[i].banner_other_data;

                details.crowdfund_project_title = result[i].crowdfund_project_title;
                details.crowdfund_short_description = result[i].crowdfund_short_description;
                details.crowdfund_project_logo = result[i].crowdfund_project_logo;
                details.crowdfund_project_banner_image = result[i].crowdfund_project_banner_image;
                details.crowdfund_project_idea_description = result[i].crowdfund_project_idea_description;
                details.crowdfund_project_idea_video_url = result[i].crowdfund_project_idea_video_url;
                details.crowdfund_team_details_array = result[i].crowdfund_teal_details_array;
                details.crowdfund_documents_pdf_list = result[i].crowdfund_documents_pdf_list;
                details.crowdfund_total_target = result[i].crowdfund_total_target;
                details.crowdfund_total_raised = result[i].crowdfund_total_raised;
                details.crowdfund_number_of_investors = result[i].crowdfund_number_of_investors;
                details.crowdfund_project_category_details = result[i].crowdfund_project_category_details;
                details.crowd_funding_category_name = result[i].crowd_funding_category_name;
                details.crodfund_project_upload_date = result[i].crodfund_project_upload_date;
                details.crowdfund_project_approval = result[i].crowdfund_project_approval;
                details.crowdfund_project_status = result[i].crowdfund_project_status;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },

    getAllDataWithCatId: (req, res) => {

        let categoryId = req.body.catid;
        var configQuery = "";
        if (categoryId == 0) {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` WHERE `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1' ORDER BY RAND() LIMIT 1";
        }
        else {
            configQuery = "SELECT * FROM `crowdfund_project_details` as cpd INNER JOIN `crowd_funding_category_list` as cfcl ON cfcl.`crowd_fund_cat_id` = cpd.`crowdfund_project_category_details` WHERE `project_main_category_details_config` = '" + categoryId + "' and `crowdfund_project_approval` = '1' and `crowdfund_project_status` = '1'";
        }

        var resp = {};
        resp.status = "success";
        resp.catidreturn = categoryId;

        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            let data = [];

            for (var i = 0; i < result.length; i++) {

                var details = {};

                details.crowdfund_project_id = result[i].crowdfund_project_id;
                details.banner_other_data = result[i].banner_other_data;

                details.crowdfund_project_title = result[i].crowdfund_project_title;
                details.crowdfund_short_description = result[i].crowdfund_short_description;
                details.crowdfund_project_logo = result[i].crowdfund_project_logo;
                details.crowdfund_project_banner_image = result[i].crowdfund_project_banner_image;
                details.crowdfund_project_idea_description = result[i].crowdfund_project_idea_description;
                details.crowdfund_project_idea_video_url = result[i].crowdfund_project_idea_video_url;
                details.crowdfund_team_details_array = result[i].crowdfund_teal_details_array;
                details.crowdfund_documents_pdf_list = result[i].crowdfund_documents_pdf_list;
                details.crowdfund_total_target = result[i].crowdfund_total_target;
                details.crowdfund_total_raised = result[i].crowdfund_total_raised;
                details.crowdfund_number_of_investors = result[i].crowdfund_number_of_investors;
                details.crowdfund_project_category_details = result[i].crowdfund_project_category_details;
                details.crowd_funding_category_name = result[i].crowd_funding_category_name;
                details.crodfund_project_upload_date = result[i].crodfund_project_upload_date;
                details.crowdfund_project_approval = result[i].crowdfund_project_approval;
                details.crowdfund_project_status = result[i].crowdfund_project_status;

                data.push(details);

            }

            resp.data = data;

            return res.status(200).send(resp);
        });
    },


    testapi: (req, res) => {
        let text = "Demo";
        let test = "Demo1";
        var resp = {};
        resp.status = "success";

        resp.text = text;
        resp.test = test;

        return res.status(200).send(resp);



    },

    loginCrowdfund: (req, res) => {

        let emailId = req.body.email;
        let password = req.body.password;
        var configQuery = "";

        configQuery = "SELECT * FROM `user_table` WHERE `email_id` = '" + emailId + "' and `password` = '" + password + "' and `status` = '1'";


        var resp = {};


        db.query(configQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }

            if (result.length) {
                resp.status = "success";
                for (var i = 0; i < result.length; i++) {

                    resp.crowdfun_user_id = result[i].user_id;

                    resp.crowdfund_user_email = result[i].email_id;

                    resp.crowd_fund_user_full_name = result[i].first_name + " " + result[i].last_name;
                    resp.crowdfund_user_dob = result[i].birth_date;
                    resp.crowdfund_user_type = 1;
                    resp.phone_no = result[i].phone_no;
                    resp.country = result[i].country;


                }
            }
            else {
                resp.status = "failed";
                resp.msg = "Email id or Password id wrong.";
            }



            return res.status(200).send(resp);
        });
    }



};


