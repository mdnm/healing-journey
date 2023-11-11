"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";

type FormData = {
  name: string;
  date: string;
  email: string;
  firstQuestionAnswer: string;
  secondQuestionAnswer: string;
  thirdQuestionAnswer: string;
  fourthQuestionAnswer: string;
  fifthQuestionAnswer: string;
  sixthQuestionAnswer: string;
  seventhQuestionAnswer: string;
  eighthQuestionAnswer: string;
  ninthQuestionAnswer: string;
  tenthQuestionAnswer: string;
};

const typeMap: Record<string, string> = {
  ["A/A"]: "Blue",
  ["A/B"]: "Violet",
  ["A/C"]: "Pink",
  ["B/A"]: "Red",
  ["B/B"]: "Orange",
  ["B/C"]: "Yellow",
  ["C/A"]: "Brown",
  ["C/B"]: "Green",
  ["C/C"]: "Indigo",
};

const typeColorClassMap: Record<string, string> = {
  ["A/A"]: "text-blue-700",
  ["A/B"]: "text-violet-700",
  ["A/C"]: "text-pink-700",
  ["B/A"]: "text-red-700",
  ["B/B"]: "text-orange-700",
  ["B/C"]: "text-yellow-700",
  ["C/A"]: "text-brown-700",
  ["C/B"]: "text-green-700",
  ["C/C"]: "text-indigo-700",
};

const readingMap: Record<string, React.JSX.Element> = {
  ["A/A"]: (
    <>
      <p>
        As someone of your type, it&apos;s important to embrace a routine that
        is flexible yet consistent, cultivating habits that spark your
        creativity. Optimal times for exercise are in the morning or afternoon,
        but avoid after 19:00. Engage in activities that require continuous
        movement, such as cycling, running, walking, or yoga. The key is to move
        every day; decide upon waking which activity will bring you joy that
        day. Movement is the heart of your routine.
      </p>
      <p>
        Eating proper meals at set times rather than snacking is a simple
        strategy to introduce consistency to your body. This predictable routine
        will aid in nourishment, digestion, and soothing your nervous system as
        your body grows accustomed to the regularity.
      </p>
      <p>
        Should you experience digestive irregularities, consider starting your
        day with warm water and timing your main meal between 11:00 and 14:00.
      </p>
      <p>
        Synchronizing your meal times can also stabilize your sleep patterns by
        reducing food intake before bed.
      </p>
      <p>
        Incorporate bedtime rituals that promote surrendering to sleep. Maintain
        consistency in these practices so your body recognizes the signals,
        leading to improved sleep and a more restful next day.
      </p>
      <p>
        Begin with basic routines like brushing your teeth and washing your face
        or engaging in skincare. Allow room for a relaxing activity that varies
        to maintain motivation and creativity, such as self-massaging your feet
        or hands, enjoying a cup of tea, or meditating.
      </p>
      <p>
        It&apos;s advisable to avoid reading before sleep as it can
        overstimulate your brain, disrupting your rest.
      </p>
      <p className="text-lg font-bold mb-1">
        Here are some practices to foster a healthy mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>Visualization and focus meditation</li>
        <li>Consumption of colorful foods</li>
        <li>
          Mindful walking, being present with your surroundings, like observing
          houses and trees
        </li>
        <li>Note-taking</li>
        <li>Carrying a sketchbook for your ideas and artistic pursuits</li>
        <li>Exploring new knowledge via books or videos</li>
      </ol>
    </>
  ),
  ["A/B"]: (
    <>
      <p>
        Your routine should be adaptable yet steady, fostering habits that
        enhance your creativity. Exercise is most beneficial in the morning or
        afternoon, but should be avoided after 19:00. Choose activities that
        keep you moving continuously, such as cycling, running, walking, and
        yoga. It&apos;s crucial to engage in movement every day; select an
        activity post-wake-up that feels right for that day. Daily movement is
        your agenda.
      </p>
      <p>
        Consuming full meals at consistent times, rather than grazing on snacks,
        is a straightforward method to establish bodily regularity. This steady
        rhythm aids in nourishment, digestion, and the stabilization of your
        nervous system through dependability.
      </p>
      <p>
        If you&apos;re experiencing digestive issues, begin your day with warm
        water and aim to have your main meal between 11:00 and 14:00.
      </p>
      <p>
        Aligning meal times can also contribute to a better sleep cycle by
        minimizing food intake before sleep.
      </p>
      <p>
        Integrate activities that facilitate a smooth transition into sleep.
        Persist with these routines so your body recognizes the cues, leading to
        improved rest and a rejuvenated feeling upon waking.
      </p>
      <p>
        Start with simple actions like oral hygiene, facial cleansing, or
        skincare. Create room for a variable relaxing activity to sustain
        motivation and creativity, such as self-massaging your extremities,
        sipping tea, or practicing meditation.
      </p>
      <p>
        Avoid reading before sleep as it may overstimulate your mind and
        interfere with your rest.
      </p>
      <p className="text-lg font-bold mb-1">
        Here is a compilation of practices to nurture a sound mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Engage in meditation with soothing sounds and positive affirmations.
        </li>
        <li>
          Experiment with mindful listening exercises (select a track, listen
          thrice, focusing on a different instrument each time).
        </li>
        <li>Embrace unitasking over multitasking.</li>
        <li>Expand knowledge via podcasts and videos.</li>
        <li>Incorporate mantra repetition as a pre-sleep ritual.</li>
        <li>Verbalize readings to yourself and explore musical pastimes.</li>
      </ol>
    </>
  ),
  ["A/C"]: (
    <>
      <p>
        Your routine should incorporate variability, yet remain consistent,
        promoting habits that spark your creativity. Exercise is most effective
        in the morning or afternoon; refrain from doing it after 19:00. Embrace
        activities that ensure continual movement, such as cycling, running,
        walking, and yoga. The crucial aspect is to engage in movement every
        day; upon awakening, choose an activity that uplifts you for that
        particular day. Movement should anchor your daily schedule.
      </p>
      <p>
        Eating substantial meals at fixed times, rather than snacking
        intermittently, establishes a routine that is beneficial for your body.
        Such a regular pattern fosters nourishment, supports digestion, and
        soothes your nervous system, as your body can depend on this regularity.
      </p>
      <p>
        If you are dealing with digestive irregularities, consider starting your
        day with warm water and aim to have lunch as your primary meal between
        11:00 and 14:00. This meal timing is also conducive to better sleep
        patterns, ensuring you consume less before going to bed.
      </p>
      <p>
        Incorporate practices into your evening routine that ease the transition
        into sleep. Consistency in these activities will teach your body to
        recognize bedtime signals, leading to a more restful sleep and
        rejuvenated mornings.
      </p>
      <p>
        Begin with basic nighttime rituals such as brushing your teeth,
        cleansing your face, or applying skincare. Allow for flexibility in your
        relaxation routine to maintain motivation and creativity, whether
        it&apos;s through self-massage, enjoying a cup of tea, or meditation.
      </p>
      <p>
        It&apos;s best to avoid reading before bed as it might overstimulate
        your brain and disrupt your rest.
      </p>
      <p className="text-lg font-bold mb-1">
        Below is a list of practices conducive to maintaining a healthy mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>Engage in meditation focusing on body awareness and relaxation.</li>
        <li>
          Implement new knowledge immediately after learning to enhance
          retention.
        </li>
        <li>
          Practice mindful eating by savoring the aroma and texture of your
          food.
        </li>
        <li>Perform stretching or a gentle yoga flow before bedtime.</li>
        <li>Write down your feelings to enhance self-awareness.</li>
        <li>Explore hobbies that involve handcrafting.</li>
      </ol>
    </>
  ),
  ["B/A"]: (
    <>
      <p>
        For your type, it&apos;s beneficial to adopt a routine that is
        adaptable, providing ample opportunity for rest, and nurturing a
        willingness to learn new things.
      </p>
      <p>
        The ideal time for exercise is early morning between 6:00 to 10:00,
        particularly during the warmer seasons when the air is freshest. If that
        isn&apos;t possible, aim for a session between 17:00 to 19:00, prior to
        dinner. It&apos;s advisable to avoid strenuous activity in hot
        conditions. While team sports can be a great fit for your competitive
        spirit, diversify your activities with sports like swimming, biking, or
        skiing.
      </p>
      <p>
        Make meditation, nature walks, and self-reflection a regular part of
        your day. Support your digestive system with meals at consistent times,
        and for evening meals, aim for 19:00 to 20:00 to help your nervous
        system recognize the pattern and wind down for sleep. Steer clear of
        stimulants and acidic foods during dinner.
      </p>
      <p>
        Tune into your body&apos;s signals and avoid overexerting yourself in
        pursuit of a &apos;productive&apos; day that may only result in physical
        stress. Remember, rest is as crucial as the tasks you undertake
        throughout your day for maintaining a balanced and healthy life.
      </p>
      <p>
        A beneficial nighttime relaxation technique that also tends to your
        physical well-being is self-massage using gentle powders like chickpea
        or rice flour. This ritual, performed before showering, stimulates lymph
        movement, boosts circulation, helps liquefy fat, and improves the
        skin&apos;s health, adding strength and tone to your body&apos;s
        tissues, while also aiding in removing excess skin oil.
      </p>
      <p className="text-lg font-bold mb-1">
        Here is a list of practices conducive to maintaining a healthy mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Practice meditation focusing on visualization and concentration.
        </li>
        <li>Incorporate a variety of colorful foods into your diet.</li>
        <li>
          Engage in mindful walks, fully observing your surroundings like the
          architecture and natural scenery.
        </li>
        <li>Jot things down to clear your mind.</li>
        <li>
          Carry a sketchbook for capturing your creative ideas and for artistic
          pastimes.
        </li>
        <li>
          Expand your knowledge by reading or watching educational content.
        </li>
      </ol>
    </>
  ),
  ["B/B"]: (
    <>
      <p>
        For your type, prioritize a flexible routine that ensures adequate rest
        and keeps you receptive to new learning experiences.
      </p>
      <p>
        The early morning hours between 6:00 and 10:00 are ideal for exercise,
        particularly during the warmer seasons when the air is freshest. If that
        doesn&apos;t fit your schedule, aim to exercise between 17:00 and 19:00,
        before dinner, but avoid the heat. Team sports cater well to your
        competitive nature, yet try to also engage in individual sports such as
        swimming, biking, and skiing.
      </p>
      <p>
        Integrate meditation, nature walks, and self-reflection into your daily
        routine as much as possible.
      </p>
      <p>
        To support your digestive system, eat at consistent times, particularly
        in the evening between 19:00 and 20:00, to help your nervous system
        prepare for rest. During dinner, avoid stimulants and acidic foods.
      </p>
      <p>
        Attune to your body&apos;s needs without pushing it to its limits for
        the sake of productivity, which can lead to unnecessary stress.
        Balancing rest with activity is key to a healthier, more balanced life.
      </p>
      <p>
        Nightly relaxation can be achieved through self-massage using gentle
        powders like chickpea or rice flour. This pre-shower ritual can
        stimulate lymph movement, boost circulation, aid in fat breakdown,
        improve skin health, and strengthen body tissues, as well as help remove
        excess skin oil.
      </p>
      <p className="text-lg font-bold mb-1">
        Here are some practices conducive to mental health:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Engage in meditation accompanied by calming sounds and affirmations.
        </li>
        <li>
          Practice mindful listening by focusing on different instruments within
          a song during repeated listenings.
        </li>
        <li>Concentrate on doing one task at a time to avoid multitasking.</li>
        <li>Expand your knowledge with podcasts and videos.</li>
        <li>Incorporate mantra repetition into your pre-sleep routine.</li>
        <li>Vocalize your readings and indulge in musical pastimes.</li>
      </ol>
    </>
  ),
  ["B/C"]: (
    <>
      <p>
        Your routine should offer flexibility, allowing for sufficient rest, and
        a mindset open to new learning experiences.
      </p>
      <p>
        The early hours from 6:00 to 10:00 are generally optimal for exercise,
        particularly in the warmer months when the air is cooler. If this
        isn&apos;t possible, aim for a session between 17:00 and 19:00, prior to
        dinner. Avoid physical exertion during high temperatures. Engaging in
        team sports can fulfill your competitive drive, yet it&apos;s also
        beneficial to include individual activities like swimming, cycling, and
        skiing.
      </p>
      <p>
        Make room for meditation, nature walks, and self-reflection within your
        daily routine as often as possible.
      </p>
      <p>
        Aid your digestive process by eating at consistent intervals. Eating in
        the evening around 19:00 to 20:00 helps your nervous system recognize a
        routine, easing into relaxation as bedtime approaches. Refrain from
        consuming stimulants and acidic foods for dinner.
      </p>
      <p>
        Attune to your body&apos;s needs, avoiding the urge to push for an
        overly productive day that may lead to undue stress. Balancing activity
        with adequate rest is essential for a healthier, more balanced
        lifestyle.
      </p>
      <p>
        To relax in the evening while also caring for your body, consider
        self-massage with gentle powders such as chickpea or rice flour before
        showering. This can stimulate lymphatic flow, enhance circulation, help
        to breakdown fat, support skin health, and strengthen bodily tissues, as
        well as assist in removing excess skin oil.
      </p>
      <p className="text-lg font-bold mb-1">
        Consider the following practices to maintain a healthy mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Engage in meditation that emphasizes body awareness and relaxation.
        </li>
        <li>Immediately apply what you learn to reinforce new concepts.</li>
        <li>
          Practice mindful eating by fully experiencing the aroma and texture of
          your food.
        </li>
        <li>
          Do some gentle stretching or a calming yoga sequence before bed.
        </li>
        <li>Express your feelings through writing to foster mindfulness.</li>
        <li>Explore hobbies that involve crafting by hand.</li>
      </ol>
    </>
  ),
  ["C/A"]: (
    <>
      <p>
        Your routine should be straightforward yet motivating, incorporating
        habits that invigorate both your body and mind. It&apos;s also crucial
        to inject variety to prevent monotony.
      </p>
      <p>
        All forms of physical activity benefit you, but optimal exercises for
        your type are those that build strength, such as biking, martial arts,
        aerobic workouts, and other vigorous, challenging routines. Mix
        different practices to maintain your interest. Aim to exercise in the
        morning or afternoon, and avoid doing so after 19:00.
      </p>
      <p>
        The digestive system operates most efficiently from 10:00 to 14:00,
        making this the best window for your largest meal, particularly if you
        have a slow digestion. Opt for lighter meals in the morning and evening,
        focusing on hot/warm foods and tea. To unwind at night and care for your
        body, self-massage with soft powders like chickpea or rice flour before
        showering can stimulate lymph movement, boost circulation, aid fat
        breakdown, improve skin health, and strengthen bodily tissues, as well
        as help manage skin oil.
      </p>
      <p>
        To improve morning motivation, avoid sleeping too late and aim for 7-8
        hours of rest, including naps in the afternoon if needed. Consistency in
        your wake-up time is beneficial, and splashing your face with cold water
        upon rising can help you feel instantly more alert.
      </p>
      <p>
        If you&apos;re prone to excessive rest, it may be necessary to motivate
        yourself with enjoyable activities. Maintain your hobbies regularly to
        ensure continuous engagement.
      </p>
      <p className="text-lg font-bold mb-1">
        Consider the following practices to maintain a healthy mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Practice meditation with a focus on visualization and concentration.
        </li>
        <li>Incorporate a diverse palette of foods in your diet.</li>
        <li>
          Take mindful walks, fully observing your surroundings, including the
          architecture and nature.
        </li>
        <li>Write things down to clarify your thoughts and intentions.</li>
        <li>
          Carry a sketchbook to capture creative ideas and for artistic
          expression.
        </li>
        <li>
          Enhance your knowledge with reading material or educational videos.
        </li>
      </ol>
    </>
  ),
  ["C/B"]: (
    <>
      <p>
        It&apos;s important for your type to establish a straightforward and
        motivating routine that includes habits energizing both your body and
        mind. It&apos;s essential to introduce variety to prevent boredom.
      </p>
      <p>
        Movement of any kind is advantageous for you, with the best forms of
        exercise being those that focus on strength building, cycling, martial
        arts, aerobics, and other robust, challenging activities. Mix up your
        workouts to keep your interest piqued. Aim to exercise in the morning or
        afternoon, avoiding any time after 19:00.
      </p>
      <p>
        Your digestive system functions optimally mid-day, between 10:00 and
        14:00, which is when you should have your largest meal, especially if
        you have slow digestion. Opt for lighter meals in the morning and
        evening, giving preference to hot/warm foods and tea. Nightly relaxation
        and bodily care can be achieved with self-massage using soft powders
        like chickpea or rice flour. This pre-shower activity stimulates the
        lymphatic system, boosts circulation, aids in fat reduction, improves
        skin health, and strengthens bodily tissues. It can also help manage
        excess skin oil.
      </p>
      <p>
        To encourage morning motivation, avoid going to bed too late, aim for
        7-8 hours of sleep, and consider taking afternoon naps. Establishing a
        consistent wake-up time is advantageous. A simple trick like washing
        your face with cold water upon waking can help you feel instantly more
        alert.
      </p>
      <p>
        If you&apos;re inclined to overrest, you&apos;ll need to push yourself
        to engage in joyful activities, so it&apos;s vital to maintain your
        hobbies regularly.
      </p>
      <p className="text-lg font-bold mb-1">
        Below are several practices beneficial for maintaining mental health:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Engage in meditation with soothing sounds and positive affirmations.
        </li>
        <li>
          Undertake mindful listening exercises, focusing on different
          instruments within a song upon repeated listenings.
        </li>
        <li>Focus on one task at a time, steering clear of multitasking.</li>
        <li>Acquire new knowledge through podcasts and video content.</li>
        <li>Practice mantra repetition before bedtime to aid in relaxation.</li>
        <li>Read aloud to yourself and explore musical pastimes.</li>
      </ol>
    </>
  ),
  ["C/C"]: (
    <>
      <p>
        For your type, a simple yet motivational routine should be prioritized,
        fostering habits that energize both your body and mind. Importantly,
        introducing variations to your routine can help avoid monotony.
      </p>
      <p>
        Movement in any form is beneficial, but the most effective exercises for
        you may include strength training, cycling, martial arts, aerobics, and
        other vigorous and engaging routines. It&apos;s important to mix these
        activities to keep your interest alive. The optimal time for exercise is
        in the morning or afternoon, and it&apos;s best not to exercise after
        19:00.
      </p>
      <p>
        The digestive system is most efficient around mid-day, from 10:00 to
        14:00, so plan your most substantial meal for this period, especially if
        you have a slower digestion. Lighter meals are preferable in the morning
        and evening, focusing on hot or warm foods and teas. To relax at night
        and also care for your body, consider a pre-shower self-massage with
        soft powders like chickpea or rice flour. This practice stimulates
        lymphatic movement, promotes circulation, aids in fat breakdown,
        improves skin health, and strengthens bodily tissues, in addition to
        helping remove excess skin oil.
      </p>
      <p>
        To enhance motivation upon waking, avoid going to bed too late.
        Don&apos;t sleep for 7-8 hours and don&apos;t take afternoon.
        Consistency in your wake-up time is helpful, and splashing your face
        with cold water can help you wake up feeling refreshed.
      </p>
      <p>
        If you find yourself resting too much, you may need to encourage
        yourself with enjoyable activities. Therefore, it&apos;s essential to
        keep your hobbies as a regular part of your routine.
      </p>
      <p className="text-lg font-bold mb-1">
        Here are some practices to maintain a sound mind:
      </p>
      <ol className="list-decimal text-left max-w-[500px] flex flex-col gap-2 mx-auto">
        <li>
          Engage in meditation that emphasizes body awareness and relaxation.
        </li>
        <li>
          Apply new knowledge immediately through practice for better retention.
        </li>
        <li>
          Practice mindful eating by fully experiencing the scent and texture of
          your food.
        </li>
        <li>
          Perform light stretching or yoga flows before bedtime to promote
          relaxation.
        </li>
        <li>Write down your feelings to process them consciously.</li>
        <li>Engage in hobbies that involve crafting by hand.</li>
      </ol>
    </>
  ),
};

export default function Questionnaire() {
  const [reading, setReading] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReading = () => {
    if (!formData.email) {
      toast.error("Please fill in your email");
      return;
    }

    const firstFiveAnswers = [
      formData?.firstQuestionAnswer,
      formData?.secondQuestionAnswer,
      formData?.thirdQuestionAnswer,
      formData?.fourthQuestionAnswer,
      formData?.fifthQuestionAnswer,
    ];

    const lastFiveAnswers = [
      formData?.sixthQuestionAnswer,
      formData?.seventhQuestionAnswer,
      formData?.eighthQuestionAnswer,
      formData?.ninthQuestionAnswer,
      formData?.tenthQuestionAnswer,
    ];

    const firstFiveAnswersMostFrequent = firstFiveAnswers.reduce(
      (acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    const lastFiveAnswersMostFrequent = lastFiveAnswers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const [firstMostFrequent] = Object.entries(
      firstFiveAnswersMostFrequent
    ).sort((a, b) => b[1] - a[1]);

    const [secondMostFrequent] = Object.entries(
      lastFiveAnswersMostFrequent
    ).sort((a, b) => b[1] - a[1]);

    setReading(`${firstMostFrequent[0]}/${secondMostFrequent[0]}`);
  };

  const steps = [
    <PersonalData
      key={"personal-data"}
      formData={formData}
      handleChange={handleChange}
    />,
    <FirstQuestionPair
      key={"first-question-pair"}
      formData={formData}
      handleChange={handleChange}
    />,
    <SecondQuestionPair
      key={"second-question-pair"}
      formData={formData}
      handleChange={handleChange}
    />,
    <ThirdQuestionPair
      key={"third-question-pair"}
      formData={formData}
      handleChange={handleChange}
    />,
    <FourthQuestionPair
      key={"fourth-question-pair"}
      formData={formData}
      handleChange={handleChange}
    />,
    <FifthQuestionPair
      key={"fifth-question-pair"}
      formData={formData}
      handleChange={handleChange}
    />,
  ];

  const handleNextStep = () => {
    if (activeStep === 0 && (!formData?.name || !formData?.date)) {
      toast.error("Please fill in your name and date of birth");
      return;
    }

    if (
      activeStep === 1 &&
      (!formData?.firstQuestionAnswer || !formData?.secondQuestionAnswer)
    ) {
      toast.error("Please select an answer");
      return;
    }

    if (
      activeStep === 2 &&
      (!formData?.thirdQuestionAnswer || !formData?.fourthQuestionAnswer)
    ) {
      toast.error("Please select an answer");
      return;
    }

    if (
      activeStep === 3 &&
      (!formData?.fifthQuestionAnswer || !formData?.sixthQuestionAnswer)
    ) {
      toast.error("Please select an answer");
      return;
    }

    if (
      activeStep === 4 &&
      (!formData?.seventhQuestionAnswer || !formData?.eighthQuestionAnswer)
    ) {
      toast.error("Please select an answer");
      return;
    }

    if (
      activeStep === 5 &&
      (!formData?.ninthQuestionAnswer || !formData?.tenthQuestionAnswer)
    ) {
      toast.error("Please select an answer");
      return;
    }

    setActiveStep((curr) => curr + 1);
  };

  return (
    <main className="p-8 pb-24 w-full" id="reading">
      <section className="max-w-3xl mx-auto space-y-8 flex flex-col items-center bg-white p-3 rounded-md">
        <h2 className="sm:text-4xl text-3xl font-extrabold">
          Quick Questionnaire
        </h2>
        {!reading && (
          <>
            <div className="flex flex-col gap-4 w-full">
              {steps[activeStep]}
            </div>
            <div className="flex items-center gap-5">
              <button
                className="btn disabled:btn-ghost enabled:btn-primary disabled:btn-outline"
                onClick={() => setActiveStep((curr) => curr - 1)}
                disabled={activeStep === 0}
              >
                {/* {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )} */}
                Back
              </button>
              {activeStep < steps.length - 1 && (
                <button className="btn btn-primary" onClick={handleNextStep}>
                  {/* {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )} */}
                  Next
                </button>
              )}
              {activeStep === steps.length - 1 && (
                <button
                  className="btn btn-secondary"
                  onClick={handleReading}
                  // disabled={isLoading}
                >
                  {/* {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )} */}
                  Get Your Reading
                </button>
              )}
            </div>
          </>
        )}
        {reading && (
          <div className="flex flex-col gap-2 text-center p-5">
            <p className="font-bold text-lg">
              Your type is{" "}
              <span className={`${typeColorClassMap[reading]}`}>
                {typeMap[reading]}
              </span>
            </p>
            <p>
              Our daily actions offer us chances to select habits that maintain
              our optimal health—physically, mentally, and emotionally.
            </p>
            <p>
              Establishing and adhering to a routine is a lasting gesture of
              self-love, leading to enhanced well-being and happiness. This, in
              turn, positively transforms every other facet of your life. The
              information provided below will assist you in crafting this
              routine.
            </p>
            <p className="font-bold text-lg">
              Here&apos;s what could work for you
            </p>
            {readingMap[reading]}
            <div className="divider"></div>
            <p className="font-bold text-lg">I hope you liked this planner!</p>
            <p>
              If you&apos;re interested in a more personalized consultation that
              includes additional daily activities tailored to your type, like
              breathing exercises or specific meditations suited to your needs,
              along with other bespoke content, please reach out to me.
            </p>
            <p>
              Should you have any questions about the recommended routine, feel
              free to send me a direct message on Instagram or an email with
              your name and type (for instance, &quot;Ana Type Blue&quot;), and
              I will get back to you within 48 hours.
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="btn btn-primary">
                <a
                  href={`mailto:healingjourneylife@gmail.com?subject=Questionnaire%20Reading&body=Hey%2C%0A%0AI%20would%20like%20to%20know%20more%20about%20the%20questionnaire%20reading.%0A%0AName%3A${formData.name}%0AType%3A${typeMap[reading]}%0A%0AThank%20you!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email Us
                </a>
              </button>
              <button className="btn btn-secondary">
                <a
                  href="https://www.instagram.com/healingjourneylife/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </button>
            </div>
            <button
              className="btn btn-ghost mx-auto"
              onClick={() => {
                setReading(null);
                setFormData(null);
                setActiveStep(0);
              }}
            >
              Try Again
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

const PersonalData = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Your name
        </span>
        <input
          type="text"
          placeholder="Your name"
          className="input input-bordered w-full max-w-xs"
          name="name"
          onChange={handleChange}
          value={formData?.name}
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Date of birth
        </span>
        <input
          type="date"
          placeholder="Date of birth"
          className="input input-bordered w-full max-w-xs"
          name="date"
          onChange={handleChange}
          value={formData?.date}
        />
      </div>
    </>
  );
};

const FirstQuestionPair = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          What time do you feel most active?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">Night</span>
              <input
                type="radio"
                name="firstQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.firstQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Morning
              </span>
              <input
                type="radio"
                name="firstQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.firstQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Afternoon
              </span>
              <input
                type="radio"
                name="firstQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.firstQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          How is your sleep quality?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Insomnia or has trouble sleeping
              </span>
              <input
                type="radio"
                name="secondQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.secondQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Falls asleep easily and/or has light sleep
              </span>
              <input
                type="radio"
                name="secondQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.secondQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Deep sleeper, hard to wake up
              </span>
              <input
                type="radio"
                name="secondQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.secondQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondQuestionPair = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Are you physically active?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">No</span>
              <input
                type="radio"
                name="thirdQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"D"}
                onChange={handleChange}
                checked={formData?.thirdQuestionAnswer === "D"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, I practice intense sports (running, weight lifting,
                dancing)
              </span>
              <input
                type="radio"
                name="thirdQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.thirdQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, competitive sports (fighting, group sports)
              </span>
              <input
                type="radio"
                name="thirdQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.thirdQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, light sports (Yoga, pilates, hiking)
              </span>
              <input
                type="radio"
                name="thirdQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.thirdQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          What are your eating habits?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Irregular appetite, can&apos;t maintain diets, prefers small
                meals throughout the day
              </span>
              <input
                type="radio"
                name="fourthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.fourthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Strong appetite, eats healthy, prefers regularly scheduled meals
              </span>
              <input
                type="radio"
                name="fourthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.fourthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Low appetite, eats exactly what is needed, prefers tasty meals
              </span>
              <input
                type="radio"
                name="fourthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.fourthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const ThirdQuestionPair = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Do you have self-care hair/skin habits?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">No</span>
              <input
                type="radio"
                name="fifthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"D"}
                onChange={handleChange}
                checked={formData?.fifthQuestionAnswer === "D"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, dry skin and hair, no fixed routine, either too much or no
                care at all
              </span>
              <input
                type="radio"
                name="fifthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.fifthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, oily skin and hair, daily routine, methodical
              </span>
              <input
                type="radio"
                name="fifthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.fifthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, regular but inconsistent routine (gets lazy sometimes),
                mixed skin and hair
              </span>
              <input
                type="radio"
                name="fifthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.fifthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Do you practice meditation?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">No</span>
              <input
                type="radio"
                name="sixthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"D"}
                onChange={handleChange}
                checked={formData?.sixthQuestionAnswer === "D"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, visualization meditations
              </span>
              <input
                type="radio"
                name="sixthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.sixthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, affirmations/mantra meditations
              </span>
              <input
                type="radio"
                name="sixthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.sixthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Yes, physical relaxation meditations
              </span>
              <input
                type="radio"
                name="sixthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.sixthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const FourthQuestionPair = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Between these options, which one do you prefer to do in your free
          time?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Painting, photography, writing, reading
              </span>
              <input
                type="radio"
                name="seventhQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.seventhQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Music, cinema, social gatherings, learning new languages
              </span>
              <input
                type="radio"
                name="seventhQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.seventhQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Sports, dancing, cooking, gardening
              </span>
              <input
                type="radio"
                name="seventhQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.seventhQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          If you practiced yoga, which of these moments would you prefer?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Meditation and learning (yamas and nyiamas)
              </span>
              <input
                type="radio"
                name="eighthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.eighthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Doing mantras and listening to relaxing music
              </span>
              <input
                type="radio"
                name="eighthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.eighthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Doing postures and breathing exercises
              </span>
              <input
                type="radio"
                name="eighthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.eighthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const FifthQuestionPair = ({
  handleChange,
  formData,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: FormData;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          How well do you organize your environment?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Extremely organized, daily cleaning, organized by form and color
              </span>
              <input
                type="radio"
                name="ninthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.ninthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Organized, weekly cleaning, organized by function
              </span>
              <input
                type="radio"
                name="ninthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.ninthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Disorganized, cleaning when needed, organized without a pattern
                or not organized
              </span>
              <input
                type="radio"
                name="ninthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.ninthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Which of these options would relax you the most?
        </span>
        <div className="flex flex-col items-center">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Observing nature, watching relaxing videos/ASMR
              </span>
              <input
                type="radio"
                name="tenthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"A"}
                onChange={handleChange}
                checked={formData?.tenthQuestionAnswer === "A"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Listening to relaxing music, nature sounds (rain, birds, etc)
              </span>
              <input
                type="radio"
                name="tenthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"B"}
                onChange={handleChange}
                checked={formData?.tenthQuestionAnswer === "B"}
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-center md:text-left">
                Hot bath, massage, zen garden
              </span>
              <input
                type="radio"
                name="tenthQuestionAnswer"
                className="radio checked:bg-secondary ml-2"
                value={"C"}
                onChange={handleChange}
                checked={formData?.tenthQuestionAnswer === "C"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <span className="font-bold text-lg text-center md:text-left">
          Your email
        </span>
        <input
          type="text"
          placeholder="Your email"
          className="input input-bordered w-full max-w-xs"
          name="email"
          onChange={handleChange}
          value={formData?.email}
        />
      </div>
    </>
  );
};
