# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
Comment.delete_all
Like.delete_all
Follow.delete_all

hyacinth = User.create!({full_name: "Hyacinth Bucket", username: "LadyoftheHouse",
  contact_info: "hbouquet@gmail.com", password: "password", profile_pic: File.open("app/assets/images/hyacinth_profile_pic.jpg")})
daisy = User.create!({full_name: "Daisy", username: "DaisyLovesOnslow",
  contact_info: "daisy@gmail.com", password: "password", profile_pic: File.open("app/assets/images/daisy.jpg")})
rose = User.create!({full_name: "Rose", username: "Rose",
  contact_info: "rose@gmail.com", password: "password", profile_pic: File.open("app/assets/images/rose-profile-pic.jpg")})
onslow = User.create!({full_name: "Onslow", username: "MisterOnslow",
  contact_info: "onslow@gmail.com", password: "password", profile_pic: File.open("app/assets/images/onslow.jpg")})
richard = User.create!({full_name: "Richard Bucket", username: "Richard",
  contact_info: "richard@gmail.com", password: "password", profile_pic: File.open("app/assets/images/richard.jpg")})
violet = User.create!({full_name: "Violet", username: "RoomForAPony",
  contact_info: "violet@gmail.com", password: "password", profile_pic: File.open("app/assets/images/violet.jpg")})


dorothy = User.create!({full_name: "Dorothy Zbornak", username: "D. Zbornak",
  contact_info: "dorothy@gmail.com", password: "password", profile_pic: File.open("app/assets/images/dorothy.png")})
sophia = User.create!({full_name: "Sophia Petrillo", username: "SophiaTheGreat",
  contact_info: "sophia@gmail.com", password: "password", profile_pic: File.open("app/assets/images/sophia.png")})
nylund = User.create!({full_name: "Rose Nylund", username: "Rose123",
  contact_info: "rosenylund@gmail.com", password: "password", profile_pic: File.open("app/assets/images/rose-nylund.jpg")})
blanche = User.create!({full_name: "Blanche Devereaux", username: "Blanche",
  contact_info: "blanche@gmail.com", password: "password", profile_pic: File.open("app/assets/images/blanche.jpg")})
sheridan = User.create!({full_name: "Sheridan Bucket", username: "Sheridan",
  contact_info: "sheridan@gmail.com", password: "password" })


post5 = Post.create!({caption: "From my garden! Pity they only lasted a brief time. I told Richard to water them carefully while I was on holiday at my sister Violet's, but he forgot.", author: hyacinth,
  image: File.open("app/assets/images/sauder_flower.png")})

post6 = Post.create!({caption: "Onslow was busy this Valentine's day, but he said I could use me pocket money for these!", author: daisy,
    image: File.open("app/assets/images/bouquet5.jpg")})
post1 = Post.create!({caption: "So lovely!", author: hyacinth,
  image: File.open("app/assets/images/bouquet1.jpg")})
post2 = Post.create!({caption: "Richard gave these to me! He's very thoughtful, my Richard.", author: hyacinth,
  image: File.open("app/assets/images/bouquet2.jpg")})
  post7 = Post.create!({caption: "In the park!", author: daisy,
    image: File.open("app/assets/images/tulips.jpg")})
post3 = Post.create!({caption: "Sheridan sent these with a card.", author: hyacinth,
  image: File.open("app/assets/images/bouquet3.jpg")})
  post11 = Post.create!({caption: "Saw these on my way to visit Sheridan.", author: hyacinth,
    image: File.open("app/assets/images/sunflowers.jpg")})
  post10 = Post.create!({caption: "My favorite!!", author: daisy,
    image: File.open("app/assets/images/tavin-flower.jpg")})
post4 = Post.create!({caption: "A gift for Emmet, shame he couldn't make my candlelight supper.", author: hyacinth,
  image: File.open("app/assets/images/bouquet4.jpg")})

post12 = Post.create!({caption: "What cute tiny blossoms.", author: hyacinth,
  image: File.open("app/assets/images/tiny-flowers.jpg")})
post13 = Post.create!({caption: "Growing in my garden.", author: hyacinth,
  image: File.open("app/assets/images/close-up-flower.jpg")})
  post27 = Post.create!({caption: "Flower time!", author: nylund,
    image: File.open("app/assets/images/f12.jpg")})
post9 = Post.create!({caption: "Another view of the museum's green house.", author: daisy,
  image: File.open("app/assets/images/greenhouse2.jpg")})
post30 = Post.create!({caption: "Dorothy, do you like these?", author: blanche,
  image: File.open("app/assets/images/f15.jpg")})
post22 = Post.create!({caption: "Such beauty!", author: dorothy,
  image: File.open("app/assets/images/f7.jpg")})

post16 = Post.create!({caption: "Prettiest thing since me!", author: sophia,
  image: File.open("app/assets/images/f1.jpg")})
post17 = Post.create!({caption: "These are perfectly nice.", author: richard,
  image: File.open("app/assets/images/f2.jpg")})
post19 = Post.create!({caption: "sniff sniff! mmmm!", author: sophia,
  image: File.open("app/assets/images/f4.jpg")})
post14 = Post.create!({caption: "More from my garden.", author: daisy,
  image: File.open("app/assets/images/garden-flowers.jpg")})
post8 = Post.create!({caption: "Part of the museum.", author: daisy,
  image: File.open("app/assets/images/greenhouse.jpg")})
post33 = Post.create!({caption: "Beauty is all around us!", author: hyacinth,
  image: File.open("app/assets/images/f18.jpg")})
post34 = Post.create!({caption: "I received flowers like these after my last performance.", author: hyacinth,
  image: File.open("app/assets/images/f19.jpg")})
post31 = Post.create!({caption: "Daisy, have you seen this type before?", author: hyacinth,
  image: File.open("app/assets/images/f16.jpg")})
post32 = Post.create!({caption: "Richard dear, I'd like these for our anniversary.", author: hyacinth,
  image: File.open("app/assets/images/f17.jpg")})
post20 = Post.create!({caption: "We had these back in Sicily.", author: sophia,
  image: File.open("app/assets/images/f5.jpg")})
post35 = Post.create!({caption: "How pretty!", author: hyacinth,
  image: File.open("app/assets/images/f20.jpg")})
post21 = Post.create!({caption: "Stan said he would give me flowers like this one day...still waiting.", author: dorothy,
  image: File.open("app/assets/images/f6.jpg")})
post24 = Post.create!({caption: "Lovely!", author: dorothy,
  image: File.open("app/assets/images/f9.jpg")})
post25 = Post.create!({caption: "Gorgeous gorgeous!", author: hyacinth,
  image: File.open("app/assets/images/f10.jpg")})
  post38 = Post.create!({caption: "It's me!", author: violet,
    image: File.open("app/assets/images/violets.jpg")})
post26 = Post.create!({caption: "I like these.", author: nylund,
  image: File.open("app/assets/images/f11.jpg")})
post28 = Post.create!({caption: "I do declare these to be the prettiest flowers of all.", author: blanche,
  image: File.open("app/assets/images/f13.jpg")})
post15 = Post.create!({caption: "So much green!", author: onslow,
  image: File.open("app/assets/images/greenplants.jpg")})
post23 = Post.create!({caption: "Anyone else just love it?", author: dorothy,
  image: File.open("app/assets/images/f8.jpg")})
post18 = Post.create!({caption: "Why won't something give these to me?!", author: sophia,
  image: File.open("app/assets/images/f3.jpg")})
post29 = Post.create!({caption: "I wish more gentleman callers would give me flowers like these.", author: blanche,
  image: File.open("app/assets/images/f14.jpg")})

post36 = Post.create!({caption: "Flowers from Tarquin!", author: sheridan,
  image: File.open("app/assets/images/tarquin-flowers.jpg")})
post37 = Post.create!({caption: "So handsome!", author: violet,
  image: File.open("app/assets/images/pony.jpg")})

  Follow.create!({follower_id: hyacinth.id, followee_id: daisy.id})
  Follow.create!({follower_id: hyacinth.id, followee_id: onslow.id})
  Follow.create!({follower_id: hyacinth.id, followee_id: rose.id})

  Follow.create!({follower_id: onslow.id, followee_id: daisy.id})
  Follow.create!({follower_id: onslow.id, followee_id: hyacinth.id})
  Follow.create!({follower_id: onslow.id, followee_id: rose.id})
  Follow.create!({follower_id: rose.id, followee_id: daisy.id})
  Follow.create!({follower_id: rose.id, followee_id: hyacinth.id})
  Follow.create!({follower_id: rose.id, followee_id: onslow.id})
  Follow.create!({follower_id: daisy.id, followee_id: onslow.id})
  Follow.create!({follower_id: daisy.id, followee_id: rose.id})
  Follow.create!({follower_id: daisy.id, followee_id: hyacinth.id})

  Follow.create!({follower_id: richard.id, followee_id: hyacinth.id})
  Follow.create!({follower_id: richard.id, followee_id: daisy.id})
  Follow.create!({follower_id: richard.id, followee_id: rose.id})

  Follow.create!({follower_id: dorothy.id, followee_id: nylund.id})
  Follow.create!({follower_id: dorothy.id, followee_id: rose.id})
  Follow.create!({follower_id: dorothy.id, followee_id: sophia.id})
  Follow.create!({follower_id: dorothy.id, followee_id: blanche.id})
  Follow.create!({follower_id: blanche.id, followee_id: hyacinth.id})
  Follow.create!({follower_id: blanche.id, followee_id: dorothy.id})
  Follow.create!({follower_id: blanche.id, followee_id: sophia.id})
  Follow.create!({follower_id: nylund.id, followee_id: sophia.id})
  Follow.create!({follower_id: sophia.id, followee_id: dorothy.id})
  Follow.create!({follower_id: dorothy.id, followee_id: hyacinth.id})

  Comment.create!({body: "Gorgeous! Is that by the baseball fields?", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Yes!", post_id: post7.id, author_id: daisy.id})
  Comment.create!({body: "I thought so.", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Beautiful!", post_id: post7.id, author_id: hyacinth.id})
  Comment.create!({body: "Beautiful!", post_id: post1.id, author_id: daisy.id})
  Comment.create!({body: "Thanks, Daisy!", post_id: post1.id, author_id: hyacinth.id})
  Comment.create!({body: "I just loooove it!", post_id: post1.id, author_id: onslow.id})
  Comment.create!({body: "Hi all!", post_id: post1.id, author_id: rose.id})
  Comment.create!({body: "Nice!", post_id: post3.id, author_id: onslow.id})
  Comment.create!({body: "Hi all!", post_id: post3.id, author_id: rose.id})
  Comment.create!({body: "Nice!", post_id: post7.id, author_id: onslow.id})
  Comment.create!({body: "Oh, nice!", post_id: post9.id, author_id: onslow.id})
  Comment.create!({body: "I do appreciate this one.", post_id: post12.id, author_id: hyacinth.id})
  Comment.create!({body: "Delightful!", post_id: post15.id, author_id: rose.id})
  Comment.create!({body: "Neat!", post_id: post11.id, author_id: rose.id})
  Comment.create!({body: "Pretty pretty pretty!", post_id: post25.id, author_id: rose.id})
  Comment.create!({body: "Very nice hyacinth!", post_id: post1.id, author_id: richard.id})
  Comment.create!({body: "Like this one too, hyacinth!", post_id: post2.id, author_id: richard.id})
  Comment.create!({body: "Wonderful!!", post_id: post8.id, author_id: blanche.id})
  Comment.create!({body: "This one is so darling.", post_id: post9.id, author_id: blanche.id})
  Comment.create!({body: "My favorite!", post_id: post1.id, author_id: blanche.id})
  Comment.create!({body: "Wonderful.", post_id: post2.id, author_id: blanche.id})
  Comment.create!({body: "Blanche, you think this is so wonderful?.", post_id: post2.id, author_id: sophia.id})
  Comment.create!({body: "Delightful? I say pitiful.", post_id: post15.id, author_id: sophia.id})
  Comment.create!({body: "Gorgeous.", post_id: post3.id, author_id: sophia.id})
  Comment.create!({body: "Love it!", post_id: post30.id, author_id: sophia.id})
  Comment.create!({body: "Where is this?", post_id: post13.id, author_id: sophia.id})
  Comment.create!({body: "Stunning.", post_id: post23.id, author_id: sophia.id})
  Comment.create!({body: "So pretty!", post_id: post3.id, author_id: daisy.id})
  Comment.create!({body: "Onslow, do you like this one?", post_id: post13.id, author_id: daisy.id})
  Comment.create!({body: "It's alright.", post_id: post13.id, author_id: onslow.id})
  Comment.create!({body: "How thoughtful!", post_id: post36.id, author_id: hyacinth.id})
  Comment.create!({body: "Very nice.", post_id: post35.id, author_id: sheridan.id})
  Comment.create!({body: "Great photo!", post_id: post32.id, author_id: sheridan.id})
  Comment.create!({body: "What color.", post_id: post13.id, author_id: sheridan.id})
  Comment.create!({body: "10 out of 10!", post_id: post12.id, author_id: sheridan.id})
  Comment.create!({body: "Fabulous!", post_id: post19.id, author_id: sheridan.id})

  Like.create!({liker_id: daisy.id, post_id: post1.id})
  Like.create!({liker_id: daisy.id, post_id: post2.id})
  Like.create!({liker_id: daisy.id, post_id: post3.id})
  Like.create!({liker_id: daisy.id, post_id: post5.id})
  Like.create!({liker_id: daisy.id, post_id: post6.id})
  Like.create!({liker_id: daisy.id, post_id: post10.id})
  Like.create!({liker_id: daisy.id, post_id: post11.id})
  Like.create!({liker_id: daisy.id, post_id: post12.id})
  Like.create!({liker_id: daisy.id, post_id: post15.id})
  Like.create!({liker_id: richard.id, post_id: post15.id})
  Like.create!({liker_id: richard.id, post_id: post1.id})
  Like.create!({liker_id: richard.id, post_id: post2.id})
  Like.create!({liker_id: richard.id, post_id: post3.id})
  Like.create!({liker_id: richard.id, post_id: post4.id})
  Like.create!({liker_id: richard.id, post_id: post26.id})
  Like.create!({liker_id: richard.id, post_id: post20.id})
  Like.create!({liker_id: richard.id, post_id: post18.id})
  Like.create!({liker_id: richard.id, post_id: post10.id})
  Like.create!({liker_id: richard.id, post_id: post19.id})
  Like.create!({liker_id: hyacinth.id, post_id: post1.id})
  Like.create!({liker_id: hyacinth.id, post_id: post2.id})
  Like.create!({liker_id: hyacinth.id, post_id: post3.id})
  Like.create!({liker_id: hyacinth.id, post_id: post5.id})
  Like.create!({liker_id: hyacinth.id, post_id: post8.id})
  Like.create!({liker_id: hyacinth.id, post_id: post11.id})
  Like.create!({liker_id: hyacinth.id, post_id: post14.id})
  Like.create!({liker_id: hyacinth.id, post_id: post15.id})
  Like.create!({liker_id: onslow.id, post_id: post1.id})
  Like.create!({liker_id: onslow.id, post_id: post4.id})
  Like.create!({liker_id: onslow.id, post_id: post6.id})
  Like.create!({liker_id: onslow.id, post_id: post7.id})
  Like.create!({liker_id: onslow.id, post_id: post10.id})
  Like.create!({liker_id: onslow.id, post_id: post13.id})
  Like.create!({liker_id: rose.id, post_id: post1.id})
  Like.create!({liker_id: rose.id, post_id: post2.id})
  Like.create!({liker_id: rose.id, post_id: post4.id})
  Like.create!({liker_id: rose.id, post_id: post7.id})
  Like.create!({liker_id: rose.id, post_id: post11.id})
  Like.create!({liker_id: rose.id, post_id: post12.id})
  Like.create!({liker_id: rose.id, post_id: post13.id})


  Like.create!({liker_id: hyacinth.id, post_id: post30.id})
  Like.create!({liker_id: hyacinth.id, post_id: post31.id})
  Like.create!({liker_id: hyacinth.id, post_id: post20.id})
  Like.create!({liker_id: hyacinth.id, post_id: post21.id})
  Like.create!({liker_id: hyacinth.id, post_id: post22.id})
  Like.create!({liker_id: dorothy.id, post_id: post18.id})
  Like.create!({liker_id: dorothy.id, post_id: post19.id})
  Like.create!({liker_id: dorothy.id, post_id: post20.id})
  Like.create!({liker_id: dorothy.id, post_id: post27.id})
  Like.create!({liker_id: blanche.id, post_id: post16.id})
  Like.create!({liker_id: blanche.id, post_id: post16.id})
  Like.create!({liker_id: blanche.id, post_id: post15.id})
  Like.create!({liker_id: blanche.id, post_id: post14.id})
  Like.create!({liker_id: blanche.id, post_id: post30.id})
  Like.create!({liker_id: blanche.id, post_id: post28.id})
  Like.create!({liker_id: blanche.id, post_id: post17.id})
  Like.create!({liker_id: blanche.id, post_id: post23.id})
  Like.create!({liker_id: sheridan.id, post_id: post20.id})
  Like.create!({liker_id: sheridan.id, post_id: post18.id})
  Like.create!({liker_id: sheridan.id, post_id: post22.id})
  Like.create!({liker_id: sheridan.id, post_id: post2.id})
  Like.create!({liker_id: sheridan.id, post_id: post1.id})
