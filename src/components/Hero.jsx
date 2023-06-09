const Hero = () => {
  return (
    <div
      className="
        w-full
        mt-72
        border-l-8
        border-b-2
        border-emerald-500
        pl-9
        hero
        fadeInFromTopLeft
        "
    >
      <p className="font-light text-emerald-200 mt-4 mb-2">Hi, my name is</p>
      <h2 className="text-6xl font-semibold text-emerald-400">
        Nicholas Ronzel
      </h2>
      <p className="text-5xl font-semibold text-emerald-100 mb-3 italic">
        I love solving problems.
      </p>
      <p className="text-emerald-700">
        Web Developer / Software Engineer / IT Professional
      </p>
      <p className="mt-4 text-emerald-100 max-w-xl mb-9">
        Transitioning from a decade-long IT career, I'm a driven software
        engineer skilled in Javascript, HTML, CSS, React, Python & more.
        Leveraging my technical expertise with a passion for innovation and
        non-stop learning, I'm excited to create impactful software solutions in
        my new role.
      </p>
    </div>
  );
};

export default Hero;
