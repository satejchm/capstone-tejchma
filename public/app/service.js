var SERVICE = (function () {
  document.addEventListener("DOMContentLoaded", function () {
    try {
      let app = firebase.app();
      let features = ["auth", "database", "messaging", "storage"].filter(
        (feature) => typeof app[feature] === "function"
      );
      document.getElementById("load");
    } catch (e) {
      console.error(e);
    }
  });

  var _db;

  //initialize firebase connection
  var _initFirebase = function () {
    firebase
      .auth()
      .signInAnonymously()
      .then(function (result) {
        console.log("connected to firebase");
        _db = firebase.firestore();
      });
  };

  //adds merch donations to database
  var _addDataMerch = function (
    fNameMerch,
    lNameMerch,
    cardNumMerch,
    mOption,
    dMerch
  ) {
    let merchInfo = {
      firstName: fNameMerch,
      lastName: lNameMerch,
      CardNumber: cardNumMerch,
      MerchOption: mOption,
      DonationAmount: dMerch,
    };

    _db
      .collection("Merch Donations")
      .add(merchInfo)
      .then(function (docRef) {
        swal("Donation Successful! Thank you!");
      })
      .catch(function (error) {
        swal("Error donating!");
        console.log("Error donating: ", error);
      });
  };

  //adds food donations to database
  var _addDataFood = function (
    fNameFood,
    lNameFood,
    cardNumFood,
    fOption,
    dFood
  ) {
    let foodInfo = {
      firstName: fNameFood,
      lastName: lNameFood,
      CardNumber: cardNumFood,
      FoodOption: fOption,
      DonationAmount: dFood,
    };

    _db
      .collection("Food Donations")
      .add(foodInfo)
      .then(function (docRef) {
        swal("Donation Successful! Thank you!");
      })
      .catch(function (error) {
        swal("Error donating!");
        console.log("Error donating: ", error);
      });
  };

  //add money donations to database
  var _addDataMoney = function (fName, lName, cardNum, donation) {
    let donationInfo = {
      firstName: fName,
      lastName: lName,
      CardNumber: cardNum,
      DonationAmount: donation,
    };

    _db
      .collection("Money Donations")
      .add(donationInfo)
      .then(function (docRef) {
        swal("Donation Successful! Thank you!");
      })
      .catch(function (error) {
        swal("Error donating!");
        console.log("Error donating: ", error);
      });
  };

  //adds questions/sends questions to database
  var _addDataQuestion = function (fullName, email, question) {
    let questionInfo = {
      fullName: fullName,
      email: email,
      question: question,
    };

    _db
      .collection("Questions")
      .add(questionInfo)
      .then(function (docRef) {
        swal("Question sent! Thank you!");
      })
      .catch(function (error) {
        swal("Error sending question!");
        console.log("Error sending: ", error);
      });
  };

  //displays home page content
  var _homeContent = function () {
    let homeInfo = `<section class='hero-wrapper'><div class='hero-info'><h1>Aw-dopt!</h1><h2>Looking to adopt a new furry friend? Not sure where to start?</h2><h3>You've come to the right place! Let's find the right dog for you.</h3></div></section><section class='consider-wrapper'><div class='consider-info'><h1>What should you consider before you adopt?</h1><p>Most people know the positives of adopting a dog. They are adorable for sure which is one of the leading reasons people choose to adopt puppies! Who wouldn't want an adorable exercise partner, cuddle buddy, friend, and addition to the family with all these happy traits? This doesn't happen by chance, typically it requires a lot of training, care, and money to adopt a dog or puppy. This is a decision that shouldn't be taken lightly. A lot of people think they are ready for a dog when they don't realize how big of a responsibility it is. There are so many things to take into account, such as breed, demeanor, age, and more that can work best for you when it comes to a dog. If you want to learn more about specific breeds, check out our breeds link on this website! Once you have an idea of what kind of dog you're looking for, we can dive into the information below.</p><h2>Commitment</h2><div class='consider-info-holder'><div class='consider-image commit'></div><p>The first one to two years of having a puppy if so much more difficult than an adopted dog. If you don't spend time training them and caring for them, it can effect you in the long wrong such as aggressive behavior, complaints from those around you, and many more problems can arise. It will take many hours every day to train and exercise your puppy, but it will really pay off in the long run. Not to mention you will also need to commit some money towards training classes to help socialize your dog. Some places offer free training, but most cost at least a small fee, while higher levels can be in the hundreds and thousands. Be sure that you are ready to commit the time, money, and energy if you decide to adopt a puppy. Another option is to adopt an older dog which is in a way a shortcut past the training, but you will still have to adjust you life to be compatible for the adopted dogs. Older dogs have past and may still need some traiining and other adjusments, so be ready to commit time to that as well. Some of the reason dogs sadly get taken to the shelter is because they shed too much or have too much energy or are improperly trained. These are important questions you can ask your vet or adoption agency before you choose to adopt so that you can find a dog to fit your lifestyle. Ultimately, be prepared to commit multiple hours a day to your pet, regardless of the starting point.</p></div><h2>Grooming</h2><div class='consider-info-holder'><p class='right'>Dogs need to be groomed too! Their nails need to be clipped, their fur needs brushed(especially long haired breeds), and they need to be bathed. They also need to have their teeth brushed. Alongside this a good alternative if you can't always get your dog to sit still to brush his teeth are some dental chews/toys. Although this will not replace dental care, you can also get professional cleaning done if you so choose. If you get this professionally done it can cost $50-$90 and it will need to be done every few months, especially long haired breeds. Along with this, your dogs fur will be everywhere! It will get on your clothes, furniture, your own mouth, sometimes in your food, and on yourself almost always! Another big thing to keep in mind is allergies. Are you allergic to dogs or are any of your family members?</p><div class='consider-image groom'></div></div><h2>Healthcare</h2><div class='consider-info-holder'><div class='consider-image vet'></div><p>Be prepared to spend money on your pet's insurance too in case of emergency. You will need to buy flea and tick monthly as well as heartworm monthly or every 6 months. It costs around $15-$20 dollars for flea and tick and heartworm can be around the same or if you do it every six months it will be around $60. These are rough estimates which will always vary on size, weight, and breed. Most pet plans will cost around $30-$40 a month. You can pay per visit, but having to do yearly vaccinations, paying for flea and tick, pet injuries, and more can add up over time. Having pet insurance typically gives you discounts and even sometimes free accommodations. Don't let this fool you, you will still need to have a lot of money saved back before you adopt. Major medical issues are common over the lifespan of a dog. Sometimes difficult decisions have to be made. Do you spend thousands of dollars to perserve a high quality of life or put them to sleep? This is a hard line to draw but something you will have to accept when you own any pet, and at some point we unfortunately will all have to face.</p></div><h2>Socialization</h2><div class='consider-info-holder'><p class='right'>Socialization is important for dogs especially at an early age to develop the right interactions. If you fail to socialize your dogs they can have issues of fear or aggression when it comes to new people, animals, or even objects. A good thing to help socialize is to go to training classes or take them to doggy daycare so they can have and learn positive interactions with other dogs. Dogs are inherently social animals and isolating them can be damaging to their and your own happiness. A well socialized dog will have a happy life and make your life a lot more fun and easy with your dog.</p><div class='consider-image social'></div></div></div></section><section class="advice-wrapper">
  <div class="advice-info">
    <h1>Shelter Worker's Words of Wisdom</h1>
    <p>
      It's important to get a hands on look from shelter workers and what they
      think is most important. Below are some words of wisdom and explanation
      from shelter workers on some of the most important things to take into
      account.
    </p>
    <h2>Adopt, Don't Shop!</h2>
    <p>
      Although many have likely heard this popular phrase, there is truth behind
      it. If each person looking to add a pet to their family adopted instead of
      going to pet stores, these numbers would decrease by a significant amount.
    </p>
    <h2>Shelters need volunteers!</h2>
    <p>
      Since shelters are non-profit they rely a lot of volunteers and donations.
      No shelter can afford to stay afloat without volunteers. Volunteers help
      to socialize, spend time with, walk, clean cages, and care for the
      animals.
    </p>
    <h2>Volunteering isn't only great for the dogs!</h2>
    <p>
      A lot of people who donate their time are dog lovers. They plan to help
      for the dogs sake, but they also get their own sort of dog therapy. They
      get to spend time with cute loving pups, making their lives better and
      leaving with a sense of reward and happiness in doing so.
    </p>
    <h2>Staff members are important!</h2>
    <p>
      Although shelters definitely could not make it without volunteers, it is
      still important to have a strong full-time staff. They are true animal
      lovers, they spend hours taking care of the animals with a very low pay.
      They devote their life to the cause and also deal with the difficult
      decisions.
    </p>
    <h2>Shelter Dogs are not broken!</h2>
    <p>
      A lot of people think that since a dog got sent to a shelter they may be
      bad since they had potentially been abused, thrown out or living as
      starts. They hardships these animals face leave them with a feeling of
      graditude when they find a new forever home. Their experiences can make
      they more vulnerable and fall in love so easily with their new owners.
    </p>
    <h2>Seeing a dog get adopted is hard and rewarding!</h2>
    <p>
      Seeing a dog you have bonded with and loved at a shelter go to a new home
      can be a bittersweet experience for shelter workers. ALthough they are sad
      to see the sweet dog fo. They are assured by they fact they are sending
      them to a happier life in a loving home.
    </p>
    <h2>Spay and neuter your dogs!</h2>
    <p>
      Taking the time to get your pet "fixed" will be worth it. By not doing so,
      it can create more homeless puppies. Shelter workers have found boxes of
      puppies on the side of roads, or wandering puppies and homeless dogs.
      While puppies are adorable, people don't realize the responsibility of a
      dog having puppies. It is vital and responsible to get your dog
      neutered/spayed.
    </p>
    <h2>When you surrender a dog, it is NOT A DONATION!</h2>
    <p>
      Unbelievably, people will drop puppies or dogs off at shelters as
      "donations". Shelter workers hear that phrase all the time. Shelters are
      here to find dogs homes. You are surrendering your dog or puppy to a life
      behind bars. This can break many animals. Think long and hard before
      adopting a new life.
    </p>
    <h2>Obey the signs and staff!</h2>
    <p>
      The shelter workers know the animals behavior best, always follow their
      rules and the instructions of signs. Every dog has a different personality
      and is working towards finding a home. Do your best to follow those rules
      and find the best dog for you.
    </p>
    <h2>Make sure you are ready!</h2>
    <p>
     Sometimes people will adopt dogs for birthdays, christmas, or other presents. Although for some this could be the greatest gift, that's not always the case. Make absolutely sure you are ready before you adopt a dog, too many dogs get sent to the shelter because their owner's don't realize the responsibility it takes. Be sure before you adopt a new life into your family!
    </p>
  </div>
</section>
`;

    return homeInfo;
  };

  //displays breeds page content
  var _breedsContent = function () {
    let breedsInfo = `<section class='breeds-wrapper'><div class='title-holder'><h1>Different types of dog breeds:</h1><p>When it comes to adopting a dog, some breeds can vary in what they need to live a happy life. Some dogs are energetic, while others are happy cuddling on the couch all day. Some dogs may be happier working but could also make a great family pet if you're up to the challenge of keeping them entertained. Choosing a dog is not only about the dog, but about yourself and how much time you are willing or able to dedicate. To explain a few different examples of dogs that may be a good choice for you, we are going to explain the top 10 most popular breeds by size as well as hypoallergenic breeds. Now when going to adopt you most likely won't find a purebred, but these traits can still help you identify a dog similar to a mix or breed you choose to add to your family.</p></div><div class='title-holder'><h4>Most Popular Small Breeds</h4></div><div class='breed'><div class='breed-info bull'><h2>French Bulldog</h2><h3>Lifespan: 10-12 years<br><br>Temperament: adaptable, playful, intelligent <br><br> They are famous for their large ears and smashed in nose. It is great for people who live in a city, apartment, or pretty much anywhere. They adapt very well to different living situations and are very relaxe and loyal. This makes it ideal for single owners, couples, or families. Overall this is a flexible and loving dog that can fit into any home!</h3></div></h1><div class='breed-info beagle'><h2>Beagle</h2><h3>Lifespan: 10-15 years<br><br>Temperament: friendly, curious, happy <br><br>Beagles have amazing noses and were bred to hunt and live in packs. They are very social and love the company of dogs and people. This dog is perfect to add to a family that already has a dog as well as kids, as they are friendly in the right household.</h3></div><div class='breed-info poodle'><h2>Poodle</h2><h3>Lifespan: 10-18 years<br><br>Temperament: active, proud, intelligent <br><br>Poodles are one of the most famous aristocratic breeds. They are among some of the smarts and most athletic dogs and are easy to train. They would work well in an active family. </h3></div><div class='breed-info york'><h2>Yorkshire Terrier</h2><h3>Lifespan: 11-15 years<br><br>Temperament: affectionate, sprightly, tomboy-ish <br><br> This breed is known as a lap dog that loves to cuddle but were bred to start to work in mines and mills. They are tiny but can be feisty and brave but also very affectione in the right home.</h3></div><div class='breed-info duch'><h2>Dachshund</h2><h3>Lifespan: 12-16 years<br><br>Temperament: friendly, curious, excitable <br><br>You may recognize this breed for it's little legs and long body. They usually don't get larger than 8 or 9 inches tall. It is a good dog for a family home.</h3></div><div class='breed-info corgi'><h2>Pembroke Welsh Corgi</h2><h3>Lifespan: 12-13 years<br><br>Temperament: affectionate, smart, alert <br><br> This is a herding breed that needs a lot of exercise to be kept happy, definitely more exercise than most small breeds. If it has an owner that is as physically active as it is, then it can be a wonderful pet to have.</h3></div><div class='breed-info span'><h2>Cavalier King Charles Spaniel</h2><h3>Lifespan: 12-15 years<br><br>Temperament: affectionate, gentle, graceful <br><br>This dog is a mixture of a toy breed and athleticism of a sporting dog, so it definitely needs exercise and attention. It is a house dog that makes for a perfect family dog as it loves to be around people and doesn't like being left alone.</h3></div><div class='breed-info mini'><h2>Miniature Schnauzer</h2><h3>Lifespan: 12-15 years<br><br>Temperament: friendly, intelligent, obedient. <br><br>These dogs were bread to farm and watchdogs. They have large bushy beards and eyebrows. This breed needs exercise but can be happy in most homes.</h3></div><div class='breed-info shih'><h2>Shih Tzu</h2><h3>Lifespan: 10-18 years<br><br>Temperament: loving, playful, outgoing <br><br>Also known as the 'lion dog' this dog breed gets along really well with children! So if you have kids, this breed may be a good choice for you. Is happy in most any living space.</h3></div><div class='breed-info pom'><h2>Pomeranian</h2><h3>Lifespan: 12-16 years <br><br>Temperament: curious, strong, and lively <br><br>They learn tricks easily and typically weigh around 3 to 7 pounds! Has a decent amount of energy for a small dog, so will need at least minimal exercise.</h3></div></div><div class='title-holder'><h4>Most Popular Large Breeds</h4></div><div class='breed'><div class='breed-info lab'><h2>Labrador Retriever</h2><h3>Lifespan: 10-14 years<br><br>Temperament: intelligent, gentle, outgoing <br><br> This breed of dog is top of the charts for a good reason. They are perfect for any owner. They make excellent working dogs, service dogs, companion dogs, and family dogs. They are easily trained and willing and happy to learn and love being around people and other creatures. Over all one of the most friendly dogs you could own. It's lovable personality makes it one of the most popular breeds. There love is as big as they are!</h3></div></h1><div class='breed-info german'><h2>German Shepherd</h2><h3>Lifespan: 9-13 years<br><br>Temperament: curious, obedient, intelligent<br><br>One of the most versatile dogs. They also can be considered as a working dog or a companion dog. They are intelligent and eager to serve and learn. They are very intelligent and need to be kept busy as they can get bored easily because of this. They are very active and need to be trained well and can become a perfect gaurdian, worker, or family member.</h3></div><div class='breed-info golden'><h2>Golden Retriever</h2><h3>Lifespan: 10-12 years<br><br>Temperament: reliable, friendly, trustworthy <br><br>Named after their golden fur, they also attain a heart of gold. This breed is well known for it's compatibility with children. If you have kids this dog is perfect for your family, as they seem to love everyone they meet. This is the perfect family dog, they are fine living inside but like most large dogs need daily exercise. </h3></div><div class='breed-info stanpoodle'><h2>Standard Poodle</h2><h3>Lifespan: 12-15 years<br><br>Temperament: alert, intelligent, loyal <br><br>This is one of the most intelligent dog breeds and training them comes easily. It is a very affectionate breed, so be prepared for lots of cuddles and attention. They are also a very active breed.</h3></div><div class='breed-info rott'><h2>Rottweiler</h2><h3>Lifespan: 8-10 years<br><br>Temperament: obedient, fearless, devoted <br><br>These dogs have recieved negative attention on tv, although that doesn't falter their popularity. This is for good reason, despite their repuation they are a very intelligent, good-natured breed. They are very loyal and attentive to their family. They are considered a herding dog but are very adaptable to other roles. They could work as a gaurd dog, a service dog, or even a loving addition to your family.</h3></div><div class='breed-info germanshort'><h2>German Shorthaired Pointer</h2><h3>Lifespan: 12-13 years<br><br>Temperament: boisterous, affectionate, bold <br><br>Known truthfully as a hunting and gun dog, this breed requires a lot of exercise and attention. Properly trained it makes an ideal companion for owners who live an active lifestyle and have a love for the outdoors. Otherwise this headstrong breed may provide to be a challenge for first time owners who aren't ready to take the lead. This breed is more for experienced owners, but still can make a great companion in the right hands.</h3></div><div class='breed-info dane'><h2>Great Dane</h2><h3>Lifespan: 8-10 years<br><br>Temperament: devoted, friendly, loving <br><br>Knwon for it's huge size and matching personality, the great dane is one of the largest dog breeds. It is often thought to be the world's tallest dog. They are gentle giants that are typically friendly and calm despit their large size. They require a lot of love, attention, and a lot of space since they are such a large breed. So make sure if you decide to get this breed you have room in your large home and a yard for them to stretch their legs in. Because of their size their life span is not as long as most breeds.</h3></div><div class='breed-info mastiff'><h2>Mastiff</h2><h3>Lifespan:6-12 years<br><br>Temperament: affectionate, good-natured, protective <br><br>This dog's appearance is very powerful. They are huge, not quite as large as a Great Dane but cutting it close. This breed makes and excellent gaurdian. Although they may seem like a beasy, they are gentle, affectionate, and loyal. It's devotion to owners and patience for children are what have secured its popularity as a large dog breed for many years. As long as you have the space, this makes a perfect family dog.</h3></div><div class='breed-info collie'><h2>Collie</h2><h3>Lifespan: 14-16 years<br><br>Temperament: intelligent, loyal, active <br><br>This is a very popular breed for it's sharp mind and friendly personality. The collie is active and needs exrcised. It rarely shows signs of any aggression, unless protecting it's family. Known as one of the most fearless and gentle, the collie makes a perfect family dog. </h3></div><div class='breed-info bern'><h2>Bernese Mountain Dog</h2><h3>Lifespan: 12-16 years. <br><br>Temperament: curious, strong, and lively <br><br>This dog breed has become very popular throughout the years, recognized by it's affectionate personality and intelligence. It has adorable features and is a true outdoor dog that fares well in cold weather. This breed is very patient and loyal, and makes a great addition to a family with children.</h3></div></div><div class='title-holder'><h4>Most Popular Hypoallergenic Breeds</h4></div><div class='breed'><div class='breed-info poodleHypo'><h2>Poodle</h2><h3>Lifespan: 12-15 years<br><br>Temperament: intelligent, trainable, friendly <br><br>This breed can be flexible to any family and is number one because it is also Hypoallergenic! They have poodles that are toy-sized, small, and larged breed, depending on what you're looking for! They have minimal shedding and are easy to train, making them great family pets!</h3></div></h1><div class='breed-info malteseHypo'><h2>Maltese</h2><h3>Lifespan: 12-15 years<br><br>Temperament: affectionate, easy-going, playful <br><br>They have more of a hair-like coat than fur and have very minimal shedding. Their docile temper and smaller size makes them one of the most popular hypoallergenic breeds for families. </h3></div><div class='breed-info bichonHypo'><h2>Bichon Frise</h2><h3>Lifespan: 12-15 years<br><br>Temperament: feisty, affectionate, gentle <br><br>Their soft, non-shedding coat makes them a perfect dog for those with allergies. They are also wonderful with children, so they are perfect for a family dog. They also have huge personalities and are very easy and eager to train. </h3></div><div class='breed-info labradoodleHypo'><h2>Labradoodle</h2><h3>Lifespan: 12-15 years<br><br>Temperament: calm, loving, outgoing <br><br>This larger breed is a mix between labrador retrievers and standard poodles. Although not all of this breed are hypoallergenic, most are typically and they also have minimal shedding. It is perfect for someone looking to avoid heavy shedding.</h3></div><div class='breed-info portugeseHypo'><h2>Portugese Water Dog</h2><h3>Lifespan: 12-15 years<br><br>Temperament: docile, obedient, brave <br><br>This breed was known for working alongside fisherman. They have minimal to no shedding. This dog is perfect for those with allergies and makes a wonderful family companion.</h3></div><div class='breed-info softCoatHypo'><h2>Soft Coated Wheaten Terrier</h2><h3>Lifespan: 12-15 years<br><br>Temperament: energetic, plarful, faithful <br><br>Wheatens are known for their soft coats similar to the maltese that is more hairlike. They shed very little and are popular not only because they are hypoallergenic but also because of their spirited tempermant that helps to make them great family companions.</h3></div><div class='breed-info chineseHypo'><h2>Chinese Crested</h2><h3>Lifespan: 13-15 years<br><br>Temperament: lively, alert, sweet-tempered <br><br>This breed may have an obious reason that they are hypoallergenic, as they have barely any hair. The small amount of hair the dog have rarely sheds. This easy maintenance makes this dog a good choice for someone who likes smaller breeds and has allergies.</h3></div><div class='breed-info giantHypo'><h2>Giant Schnauzer</h2><h3>Lifespan: 12-15 years<br><br>Temperament: dominant, loyal, powerful<br><br>This dog breed has a wiry, hypoallergenic coat that sheds minimally and is also weather resistant. This dog breed would do well in a family that is very active and adventurous, as they need a lot of exercise. </h3></div><div class='breed-info afghanHypo'><h2>Afghan Hound</h2><h3>Lifespan: 12-14 years<br><br>Temperament: aloof, independent, happy <br><br>This breed has a beautiful, long coat. Surprisingly, even with the long coat, they have minimal shedding alonside the rest of the hypoallergenic dog breeds. </h3></div><div class='breed-info kerryHypo'><h2>Kerry Blue Terrier</h2><h3>Lifespan: 13-15 years <br><br>Temperament: affectionate, loyal, spirited <br><br>This breed has a similar coat to that of the soft coated wheaten terrier which also has minimal shedding. This dogs termperant makes them the perfect family dog. </h3></div></div></section>`;

    return breedsInfo;
  };

  //displays donate content
  var _donateContent = function () {
    let donateInfo = `<section class='donate-wrapper'><h1>Donate to your local shelters</h1><h2>Ways you can Donate:</h2></<h2><div class='donate'><div class='image-holder-merch'><h3>Merch</h3><div class='merch-image'><button class='donate-button' id='donate-merch'>Click to Donate!</button></div><p>One way you can donate is by purchasing one of our merch items such as a sticker to bracelet! More to come in the future. Essentially we have a minimum of $5 for each item as most items take a few cents to make so that we can put any proceeds outside of cost of production towards shelters in need!</p></div><div class='image-holder-food'><h3>Food</h3><div class='food-image'><button class='donate-button' id='donate-food'>Click to Donate!</button></div><p>One vital need for shelters is to make sure all the pups are fed. Using this option you donate specifically for food and treats for the dog! All proceeds go towards this cause.</p></div><div class='image-holder-money'><h3>Donation</h3><div class='money-image'><button class='donate-button' id='donate-money'>Click to Donate!</button></div><p>A very straight forward way of donating is to choose a donation amount and donate. This allows shelters to put the money towards things like medicines and care for the pets or really whatever the animals needs!</p></div></div></section><div class="donate-time-wrapper">
    <div class="donate-holder"><h2>Donate Your Time:</h2><p>There are many great ways you can donate to shelters when it comes to materials, but overall shelters need a lot of help. Since shelters are non-profit it is hard or nearly impossible to keep a shelter triving without volunteers. Volunteering is a hands on approach that is rewarding and helpful to shelters and dogs everywhere.There are other ways you can help by volunteering, in and outside of the shelters! Let's explore a few ways you can help by volunteering.</p><h3>Walking Shelter dogs</h3><p>All shelters could use extra help. A fun way to help will be to help walk shelter dogs. Shelter dogs are often kept inside all day, so you get to meet a furry friend and make their day by getting them exercise!</p><h3>Assisting in Adoption Days</h3><p>It's hard to run adoption days, it takes a lot of work to do so! You can lend a helping hand by helping care for the dogs at the events, advocate for the pets, and help them find a family that is right for them!</p><h3>Helping an elderly take care of their dog</h3><p>Having to give up a pet because of old age can be one of the hardest things to do. Elderly benefit so much from having a pet, but sometimes are unable to take care of them. You can help them keep their pet by taking them on walks or taking them to the vet. This leaves one less dog in the shelter and keeps a happy relationship for the dog and their owner.</p><h3>Fostering a shelter dog</h3><p>Adopting a new dog into the family is a lot to take on. If you aren't sure if you're ready to adopt yet, think about fostering shelter dogs! You get the best experience and give a dog a temporary home for a few weeks until they get adopted! You can help them live a comfortable life while waiting for their forever home. Sometimes people even end up keeping their fosters in their own home!</p></div>
  </div>
  `;

    return donateInfo;
  };

  //displays modal content
  var _donateModalContent = function () {
    let modalContent = `<div class='modal-form'><div class='input-holder'><div class='header-holder'><h1>Donate today to help shelters near you!</h1></div><input id='first-name' class='input' type='text' placeholder='Enter First Name'><input id='last-name' class='input' type='text' placeholder='Enter Last Name'><input id='card-num' class='input' type='text' placeholder='Enter Card Number'><input id='donation-amt' class='input' type='text' placeholder='Enter Donation Amount'><button class='verify-donate-button' id='verify-money'>Complete Donation</button></div></div>`;

    return modalContent;
  };

  //displays donate food modal
  var _donateFoodModalContent = function () {
    let modalContent = `<div class='modal-form'><div class='input-holder'><div class='header-holder'><h1>Donate today to help shelters near you!</h1></div><input id='first-name-food' class='input' type='text' placeholder='Enter First Name'><input id='last-name-food' class='input' type='text' placeholder='Enter Last Name'><input id='card-num-food' class='input' type='text' placeholder='Enter Card Number'><input id='food-option' class='input' type='text' placeholder='Enter option: food, treats, beds or toys'><input id='donation-amt-food' class='input' type='text' placeholder='Enter Donation Amount'><button class='verify-donate-button' id='verify-food'>Complete Donation</button></div></div>`;

    return modalContent;
  };

  //displays donate merch modal
  var _donateMerchModalContent = function () {
    let modalContent = `<div class='modal-form'><div class='input-holder'><div class='header-holder'><h1>Donate today to help shelters near you!</h1></div><input id='first-name-merch' class='input' type='text' placeholder='Enter First Name'><input id='last-name-merch' class='input' type='text' placeholder='Enter Last Name'><input id='card-num-merch' class='input' type='text' placeholder='Enter Card Number'><input id='merch-option' class='input' type='text' placeholder='Enter merch option: sticker or bracelet'><input id='donation-amt-merch' class='input' type='text' placeholder='Enter Donation Amount'><button class='verify-donate-button' id='verify-merch'>Complete Donation</button></div></div>`;

    return modalContent;
  };

  //displays login form page - not working just the css for the page
  var _contactContent = function () {
    let contactInfo = `<div class='contact-form'><div class='contact-input-holder'><h1>Have Specific Questions?</h1><h2>Fill out the form below and someone will get back with you shortly!</h2><input id='full-name' class='input' type='text' placeholder='Enter Full Name'><input id='email' class='input' type='text' placeholder='Enter Email Address'><input id='question' class='input ' type='text' placeholder='Enter Question'><button class='verify-question-button' id='verify-question'>Send Question!</button></div></div><div class="contact-shelter">
  <div class="contact-shelter-holder">
    <h1>Want to contact our local shelters here in Indiana?</h1>
    <h2>Here is a list of their locations and websites!</h2>
    <button class="contact-button" id="contact-shelter-button">
      Click Here for shelter list!
    </button>
  </div>
</div>
`;
    return contactInfo;
  };

  //display page of site resources
  var _resourcesContent = function () {
    let resources = `<div class='resource-wrapper'><div class='resource-info'>
    <h1>Site Resource Information</h1>
        <p>Images: All images were located via google image search or stock photo
        websites. I DO NOT OWN RIGHTS TO ANY PHOTOS. This is an informational
        website that was created as a capstone/senior project as well as a portfolio
        piece. I DO NOT OWN RIGHTS TO THE SITE INFORMATION. The site information was found through the following list of sites.</p>
        <br />
        <a
          href="https://www.msn.com/en-us/lifestyle/pets-animals/the-30-most-popular-small-dog-breeds-in-america/ss-BBZM6qz#image=22"
          >Small Dog Dreeds Info</a
        >
    
        <a href="https://www.petmd.com/dog/top_tens/evr_dg_large_breed_dogs?page=2"
          >Medium/Large Dog Breeds Info Source</a
        >
        <a
          href="https://lifehacker.com/what-should-i-know-before-i-adopt-a-dog-1646725153"
          >Considerations</a
        ><a
          href="https://iheartdogs.com/10-most-popular-hypoallergenic-dog-breeds//"
          >Hypoallergenic Breeds</a
        ><a
          href="http://www.animalplanet.com/the-importance-of-volunteering-and-donating-to-your-local-shelter/"
          >Donation Information</a
        >
        <a
          href="https://barkpost.com/good/things-shelter-workers/"
          >Shelter worker's Perspective</a
        ><a
        href="https://www.good-deeds-day.org/blog/volunteer-with-dogs/?gclid=Cj0KCQjwy6T1BRDXARIsAIqCTXrm6_VedIymGpFf-fhX4h4vn22G7yMK26BfkYxjwvERhPTAqkZ4sSgaAnJEEALw_wcB"
        >Volunteer Ways</a
      ><a
      href="https://www.good-deeds-day.org/blog/volunteer-with-dogs/?gclid=Cj0KCQjwy6T1BRDXARIsAIqCTXrm6_VedIymGpFf-fhX4h4vn22G7yMK26BfkYxjwvERhPTAqkZ4sSgaAnJEEALw_wcB"
      >Dog Shelter List</a
    ></div></div>>`;
    return resources;
  };

  return {
    initFirebase: _initFirebase,
    homeContent: _homeContent,
    breedsContent: _breedsContent,
    donateContent: _donateContent,
    contactContent: _contactContent,
    donateModalContent: _donateModalContent,
    donateFoodModalContent: _donateFoodModalContent,
    donateMerchModalContent: _donateMerchModalContent,
    resourcesContent: _resourcesContent,
    addDataMerch: _addDataMerch,
    addDataFood: _addDataFood,
    addDataMoney: _addDataMoney,
    addDataQuestion: _addDataQuestion,
  };
})();
