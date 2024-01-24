import { useNavigate } from "react-router-dom";
import "../Home/BlogDetails";
import { Link } from "react-router-dom";
import { TabTitle, Capitalize } from "../../utils/GeneralFunctions";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const Safety = () => {
  TabTitle("About Pick Up Panama");
  Capitalize();

   //safety page forward back
   const navigate = useNavigate();
   const goToCanalStory = () => {
     navigate("/featured/how-do-i-visit-the-panama-canal");
   };
   const goToTransportationStory = () => {
     navigate("/blogs/how-do-i-get-around-in-panama");
   };

  return (
    <main id="main-element" className={`blog-details margin `}>

      <section className={blog.className}>
        <div className="line-divider centered wide">
          <p className="diamond-text-box date">
            <span className="left"></span>
            <span className="content caps centered">August 29, 2023</span>
            <span className="right"></span>
          </p>
        </div>
        <h1 className="centered post-title">Is Panama safe?</h1>
        <p className="body intro">Panama is regarded as one of the safest countries in Central America. You will find that most Panamanians are friendly and welcoming people.</p>
        <div className="share-parent">
          <FacebookShareButton
            url={currentPageUrl}
            hashtag="#panama"
            aria-label="facebook"
          >
            <FacebookIcon size={35} />
          </FacebookShareButton>
          <TwitterShareButton
            url={currentPageUrl}
            hashtags={["pickuppanama","safety", "panama"]}
            title={"Is Panama Safe?"}
            aria-label="twitter"
          >
            <TwitterIcon size={35} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={currentPageUrl}
            title={"Is Panama Safe?"}
            summary={"Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more."}
            aria-label="linkedin"
          >
            <LinkedinIcon size={35} />
          </LinkedinShareButton>
          <EmailShareButton
            url={currentPageUrl}
            subject={"Is Panama Safe?"}
            body={"Follow these tips to stay safe in Panama. Learn how to prevent muggings, avoid bad areas, and more."}
            aria-label="email"
            separator={" "}
          >
             <EmailIcon size={35} />
          </EmailShareButton>
        </div>
        <p className="moderate-crime"></p>There is a moderate crime rate in Panama. The crime rate in Panama City is much lower than in some major US cities such as St. Louis, Missouri, and Chicago, Illinois. The past three years have seen a slight increase in Panama's crime rate.
        <p className="despite-this">Despite this, the likelihood of you being mugged is slim. Most establishments are patrolled by police and armed security. While this can give you a sense of safety, there are other precautionary measures you can take to maintain safety in Panama.</p>
        <p className="this-article">This article will cover preventing muggings, recognizing scams, health and safety and areas to avoid.</p>
        <figure className="cops-at-fruitstand">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-police-at-fruitstand-320.webp 320w, /images/safety/panamanian-police-at-fruitstand-480.webp 480w, /images/safety/panamanian-police-at-fruitstand-640.webp 640w, /images/safety/panamanian-police-at-fruitstand-768.webp 768w, /images/safety/panamanian-police-at-fruitstand.webp 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-police-at-fruitstand-320.jpg 320w, /images/safety/panamanian-police-at-fruitstand-480.jpg 480w, /images/safety/panamanian-police-at-fruitstand-640.jpg 640w, /images/safety/panamanian-police-at-fruitstand-768.jpg 768w, /images/safety/panamanian-police-at-fruitstand.jpg 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <img
              fetchpriority="high"
              className="no-right-click"
              src="/images/safety/panamanian-police-at-fruitstand.jpg"
              alt="panamanian police"
            />
          </picture>
          <figcaption>Panamanian Public Forces in Coronado</figcaption>
        </figure>
        <figure className="bank-police">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-policeman-outside-of-bank-320.webp 320w, /images/safety/panamanian-policeman-outside-of-bank-480.webp 480w, /images/safety/panamanian-policeman-outside-of-bank-640.webp 640w, /images/safety/panamanian-policeman-outside-of-bank-768.webp 768w, /images/safety/panamanian-policeman-outside-of-bank.webp 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-policeman-outside-of-bank-320.jpg 320w, /images/safety/panamanian-policeman-outside-of-bank-480.jpg 480w, /images/safety/panamanian-policeman-outside-of-bank-640.jpg 640w, /images/safety/panamanian-policeman-outside-of-bank-768.jpg 768w, /images/safety/panamanian-policeman-outside-of-bank.jpg 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <img
              className="no-right-click"
              src="/images/safety/panamanian-policeman-outside-of-bank.jpg"
              alt="police officer by a bank"
            />
          </picture>
          <figcaption>A Panamanian police officer outside of a bank</figcaption>
        </figure>
        <figure className="market-police">
          <picture>
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-police-el-cangrejo-320.webp 320w, /images/safety/panamanian-police-el-cangrejo-480.webp 480w, /images/safety/panamanian-police-el-cangrejo-640.webp 640w, /images/safety/panamanian-police-el-cangrejo-768.webp 768w, /images/safety/panamanian-police-el-cangrejo.webp 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <source
              type="image/jpg"
              srcSet={
                process.env.PUBLIC_URL +
                "/images/safety/panamanian-police-el-cangrejo-320.jpg 320w, /images/safety/panamanian-police-el-cangrejo-480.jpg 480w, /images/safety/panamanian-police-el-cangrejo-640.jpg 640w, /images/safety/panamanian-police-el-cangrejo-768.jpg 768w, /images/safety/panamanian-police-el-cangrejo.jpg 1170w"
              }
              sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
            />
            <img
              className="no-right-click"
              src="/images/safety/panamanian-police-el-cangrejo.jpg"
              alt="man talking to cops"
            />
          </picture>
          <figcaption>Panamanian police officers talk to a man</figcaption>
        </figure>
        <section>
          <h2>Who are the prime targets for muggers?</h2>
          <p>Muggers have different criteria that dictate who their next victim will be. Gender, age, physical build, how you are dressed, time of day and whether or not you are alone all factor in.</p>
          <h3>People who are alone</h3>
          <p>The most common target for a mugger is someone who is alone and in an isolated area. Train station platforms, alleys or parking lots are where you need to exercise extreme caution. Do your best to avoid any desolate areas. If you do take the train, stay alert and keep close to other commuters.</p>
          <p>Oftentimes, a mugger will approach under the pretense of asking you for directions or making small talk.  If this happens, you can go ahead and give them directions but keep your distance, glance at their hands and confidently look them straight in the eyes. If you are walking and they come up and start walking alongside you, don't break stride and head to the nearest crowded area if they continue to follow you."</p>
          <h3>People who look unsure of themselves</h3>
          <p>Muggers will size up a person's body language before making their move. They target people who look inattentive, lost or distracted. They are looking for a person who has a lazy slouching posture or looks at the ground when they walk. Plan your routes ahead of time so that you know where you are going before you even leave your hotel. If you have to ask for directions on the way, a mugger may think that you are lost and target you. The best case scenario is to plan your route so that you will be walking down main streets with lots of people on them.</p>
          <p>If you are able, walk tall with your shoulders back and your eyes level. This will help you become more aware of your surroundings. Maintain situational awareness by leaving your headphones off and don't text or look at your phone while you walk.</p>
          <p>Muggers will go after somebody who is walking while texting because it is clear that they are not paying attention. Watch and listen to your surroundings. If you do so, you will be able to spot potential threats. If you do see a potential threat, move to a safer area.</p>
          <p>When you are going around corners, take wide turns so that you can see what is around the corner. Muggers like to ambush people as they come around corners.</p>
          <p>Take note of people sitting in parked cars and people who appear to just be standing around. Glance side to side from time to time as you walk and quickly make eye contact when you walk past people. Walking with purpose and showing that you are not afraid of a little eye contact will show that you are a confident and on the ball person. You will not be the first choice for a mugger.</p>
          <p>When you enter the location that you are going to, do a quick scan of the people around you and assess the mood/atmosphere of the place. Sit with a vantage point that allows you to see the entrance and check to see where the emergency exits are ahead of time.</p>
          <h3>People who project wealth</h3>
          <p>Muggers target people who appear to have money. Tourists with expensive clothes, jewelry, or designer sunglasses and cufflinks are prime targets.</p>
          <p>Make an effort to avoid dressing or acting like a tourist. Upscale apparel and high end items will inform muggers that you are not from the area and that you have money. Dress modestly, don't overdo it with selfies and don't flash wads of money. Leave expensive jewelry at home. Just carry enough money for whatever you need for that outing and leave the rest hidden in your hotel room.</p>
          <p>Make sure to look around carefully and trust your intuition before accessing your cash to pay for something, use an ATM machine, or take a selfie. If something just seems suspicious or out of place, hold off on that until you find a safer location.</p>
          <h2>What to do if you are getting mugged</h2>
          <p>If you are mugged, simply comply with the mugger and give them what they want so that you don't risk injury. Don't argue with them or try to talk to them. All of the prevention measures mentioned earlier and confidence may still not be enough to deter a mugger.</p>
          <p>Many muggers are looking to commit their crime quickly, quietly and without assaulting the victim. However, muggers are desperate people who will resort to physical or armed violence to get what they want.</p>
          <p>You may want to consider keeping a dummy wallet on you. This is a wallet that would contain small bills, old receipts, coupons, business cards and an expired credit card. The idea is that in case of a mugging you can throw this toward the mugger so that you are not out a lot of cash and your real credit cards.</p>
          <h2>High crime areas in Panama</h2>
          <p>According to incidents reported to the Panamanian local police, the high crime areas around Panama City are:</p>
          <ul>
            <li>San Miguelito</li>
            <li>Rio Abajo</li>
            <li>El Chorrillo</li>
            <li>Santa Ana</li>
            <li>Panama Viejo (The neighborhood iteself has crime. The park where you see the ruins does not.)</li>
          </ul>
          <p>Most of the crime reported in these areas are amongst rival gang members and not against tourists. However, I suggest you stay out of these areas so you are not caught between gang violence just because you were in the wrong place.</p>
          <p>During the day, Casco Viejo is relatively out of harm's way. This area is ideal for pedestrians and has a lot of sightseers. It is usually pretty crowded so watch out for pickpockets. Whenever I walk through there and to the Fish Market, I always feel safe. The Presidential Palace is nearby, so you will see lots of police and group tours.</p>
          <figure className="casco-police">
            <picture>
              <source
                type="image/webp"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/casco-viejo-police-320.webp 320w, /images/safety/casco-viejo-police-480.webp 480w, /images/safety/casco-viejo-police-640.webp 640w, /images/safety/casco-viejo-police-768.webp 768w, /images/safety/casco-viejo-police.webp 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <source
                type="image/jpg"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/casco-viejo-police-320.jpg 320w, /images/safety/casco-viejo-police-480.jpg 480w, /images/safety/casco-viejo-police-640.jpg 640w, /images/safety/casco-viejo-police-768.jpg 768w, /images/safety/casco-viejo-police.jpg 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <img
                className="no-right-click"
                src="/images/safety/casco-viejo-police.jpg"
                alt="casco viejo police"
              />
            </picture>
            <figcaption>Police patrolling in Casco Viejo</figcaption>
          </figure>
          <figure className="casco-tourist">
            <picture>
              <source
                type="image/webp"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/autoridad-de-turismo-320.webp 320w, /images/safety/autoridad-de-turismo-480.webp 480w, /images/safety/autoridad-de-turismo-640.webp 640w, /images/safety/autoridad-de-turismo-768.webp 768w, /images/safety/autoridad-de-turismo.webp 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <source
                type="image/jpg"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/autoridad-de-turismo-320.jpg 320w, /images/safety/autoridad-de-turismo-480.jpg 480w, /images/safety/autoridad-de-turismo-640.jpg 640w, /images/safety/autoridad-de-turismo-768.jpg 768w, /images/safety/autoridad-de-turismo.jpg 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <img
                className="no-right-click"
                src="/images/safety/autoridad-de-turismo.jpg"
                alt="police vehicles"
              />
            </picture>
            <figcaption>Casco Viejo Tourist Authority and police vehicles</figcaption>
          </figure>
          <p>Casco Viejo is bordered by El Chorrillo, Santa Ana and Calidonia. These are known as high crime areas and you will notice these areas look very run down. Cab drivers raise their rates at night, knowing that most tourists will not want to walk through these rough looking areas.</p>
          <figure className="near-casco">
            <picture>
              <source
                type="image/webp"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/cinco-de-mayo-panama-320.webp 320w, /images/safety/cinco-de-mayo-panama-480.webp 480w, /images/safety/cinco-de-mayo-panama-640.webp 640w, /images/safety/cinco-de-mayo-panama-768.webp 768w, /images/safety/cinco-de-mayo-panama.webp 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <source
                type="image/jpg"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/cinco-de-mayo-panama-320.jpg 320w, /images/safety/cinco-de-mayo-panama-480.jpg 480w, /images/safety/cinco-de-mayo-panama-640.jpg 640w, /images/safety/cinco-de-mayo-panama-768.jpg 768w, /images/safety/cinco-de-mayo-panama.jpg 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <img
                className="no-right-click"
                src="/images/safety/cinco-de-mayo-panama.jpg"
                alt="cinco de mayo panama"
              />
            </picture>
            <figcaption>Cinco de Mayo neighborhood by Casco Viejo</figcaption>
          </figure>
          <p>I advise against walking back to your hotel from Casco Viejo because you don't want to walk through these neighborhoods on foot. You can also check Uber to see if the rate is cheaper than a cap.</p>
          <h3>Colon</h3>
          <p>Colon is on the Atlantic side and is known as a high crime area. If you want to visit, I would say to go with an established company that gives tours of Colon. Most muggers in Colon pose as cab drivers or fake tour guides. They are known for aggressively approaching tourists and demanding to be hired for their 'services'. Stay with the group, and you should be okay.</p>
          <figure className="colon-plate">
            <picture>
              <source
                type="image/webp"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/colon-panama-license-plate-320.webp 320w, /images/safety/colon-panama-license-plate-480.webp 480w, /images/safety/colon-panama-license-plate-640.webp 640w, /images/safety/colon-panama-license-plate-768.webp 768w, /images/safety/colon-panama-license-plate.webp 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <source
                type="image/jpg"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/colon-panama-license-plate-320.jpg 320w, /images/safety/colon-panama-license-plate-480.jpg 480w, /images/safety/colon-panama-license-plate-640.jpg 640w, /images/safety/colon-panama-license-plate-768.jpg 768w, /images/safety/colon-panama-license-plate.jpg 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <img
                className="no-right-click"
                src="/images/safety/colon-panama-license-plate.jpg"
                alt="colon license plate"
              />
            </picture>
            <figcaption>A Colon license plate from a taxi</figcaption>
          </figure>
          <h3>The Darien Gap</h3>
          <p>The Darien Gap is near the Columbian border. It is a dangerous remote stretch of rainforests and jungle that would have to be crossed on foot since vehicles cannot go through. Passing through here would be a tough assignment for anybody.</p>
          <p>The trails are difficult to navigate, with lots of flash floods, insects and snakes. Most of the journey involves climbing steep mountains and going through muddy swamps in the pouring rain.</p>
          <p>Criminal and human trafficking networks operate in this area and there is a limited police presence. The trek is usually attempted by migrants from South America with the hope of a better life.</p>
          <p>There are thrill seeking adventurers who seek out the Darien Gap as part of their vacation. If you decide to go there, do so with a well experienced group that can guide you, bring all your essentials and have some solid training under your belt.</p>
          <h2>{blog.h2SafeWater}</h2>
          <p>{blog.hygieneStandards}</p>
          <p>{blog.hepatitisA}</p>
          <p>{blog.playItSafe}</p>
          <h2>{blog.h2Insects}</h2>
          <p>{blog.panamaDoesHave}</p>
          <h2>{blog.h2Tips}</h2>
          <ul>
            <li>{blog.shareItinerary}</li>
            <li>{blog.beforeLeavingHotel}</li>
            <li>{blog.smartTraveler}</li>
            <li>{blog.moneyBelt}</li>
            <li>{blog.differentPockets}</li>
            <li>{blog.rubberBand}</li>
            <li>{blog.mentalChecklist}</li>
            <li>{blog.beGuarded}</li>
            <li>{blog.neverLeave}</li>
            <li>{blog.beMindful}</li>
            <li>{blog.commotion}</li>
            <li>{blog.takeLookBack}</li>
            <li>{blog.checkIn}</li>
            <li>{blog.emergencyNum}</li>
            <li>{blog.insurance}</li>
            <li>{blog.phrases}</li>
            <li>{blog.copyPassport}</li>
            <li>{blog.avoidWalking}</li>
            <li>{blog.clubbing}</li>
            <li>{blog.parkWellLit}</li>
            <li>{blog.takeUber}</li>
          </ul>
          <p>{blog.overallPanamaIs}</p>
          <p>{blog.mostTips}</p>
          <figure className="casco-petty-crime last-figure">
            <picture>
              <source
                type="image/webp"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/casco-viejo-petty-crime-320.webp 320w, /images/safety/casco-viejo-petty-crime-480.webp 480w, /images/safety/casco-viejo-petty-crime-640.webp 640w, /images/safety/casco-viejo-petty-crime-768.webp 768w, /images/safety/casco-viejo-petty-crime.webp 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <source
                type="image/jpg"
                srcSet={
                  process.env.PUBLIC_URL +
                  "/images/safety/casco-viejo-petty-crime-320.jpg 320w, /images/safety/casco-viejo-petty-crime-480.jpg 480w, /images/safety/casco-viejo-petty-crime-640.jpg 640w, /images/safety/casco-viejo-petty-crime-768.jpg 768w, /images/safety/casco-viejo-petty-crime.jpg 1170w"
                }
                sizes="(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 768px) 768px, 1170px"
              />
              <img
                className="no-right-click"
                src={blog.cascoPettyCrime}
                alt={blog.cascoPettyCrimeAltText}
              />
            </picture>
            <figcaption>{blog.cascoPettyCrimeCaption}</figcaption>
          </figure>
        </section>
        <div className="button-parent">
          <button
            title="How do I visit the Panama Canal?"
            onClick={goToCanalStory}
          >
            &#60;
          </button>
          <button
            title="How do I get around in Panama?"
            onClick={goToTransportationStory}
          >
            &#62;
          </button>
        </div>
      </section>
    
  </main>
  );
};

export default Safety;
