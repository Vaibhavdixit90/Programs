import Image from "next/image";
import React from "react";

const BlogSingle = () => {
  return (
    <div className="px-4 py-8 sm:py-12">
      <div className="relative w-full h-[300px] sm:h-[500px] rounded-xl overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src="/Ram.webp"
          alt="Sanmarga Srividya"
          layout="fill"
        />
      </div>

      <div className="my-10 text-left md:text-center">
        <h1 className="text-3xl sm:text-5xl font-bold">
          What is Sanmarga Srividya?
        </h1>
        <h3 className="text-lg sm:text-2xl font-semibold mt-2">
          Ancient Wisdom and Modern Science in the Quest for Existential Reality
        </h3>
      </div>

      <div className="mt-6 leading-relaxed">
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Srividya</span>, often referred to as
          the science of existential reality, bridges the gap between ancient
          wisdom and modern science. While modern science grapples with
          questions about the origin of the universe and the emergence of
          something from nothing, ancient Sanatana Dharma offers a profound
          perspective rooted in the concept of{" "}
          <span className="font-semibold">&quot;Param Shunya.&quot;</span> This article
          explores the philosophy and practice of Srividya, emphasizing its role
          in achieving stillness and inner evolution, ultimately leading to a
          state of complete being.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
          The Concept of Param Shunya:
        </h2>
        <p className="text-base sm:text-lg mt-3">
          Ancient Sanatana Dharma posits that the world originated from God in
          the form of <span className="font-semibold">&quot;Param Shunya,&quot;</span>{" "}
          which is synonymous with Nirakar Parabrahman, the formless divine.
          Siddhas, the great ancient spiritual practitioners, centered their
          contemplation on Nirakar Parabrahman as a part of their{" "}
          <span className="font-semibold">Srividya Sadhana.</span> Srividya is
          the path of <span className="font-semibold">&quot;Shunya&quot;</span> or
          nothingness. Through the process of mental deletion, where one removes
          all thoughts and distractions, practitioners aim to reach a state of
          <span className="font-semibold">&quot;stillness.&quot;</span> This stillness,
          known as <span className="font-semibold">Param Shunya,</span>{" "}
          transcends ordinary existence and serves as the backdrop of
          consciousness.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
          Sanmarga: The Righteous Path to Existence:
        </h2>
        <p className="text-base sm:text-lg mt-3">
          Sanmarga, the righteous path, guides individuals toward a state of
          being or existence. The Supramental lineage of Sri Siddha Sanmarga
          adheres to the traditional practice of Sanmarga Srividya Sadhana to
          establish and experience supramental enlightenment. Srividya acts as a
          science that leads one to absolute stillness, facilitating the inner
          evolution of humanity. It involves discovering a state of completeness
          within oneself, understanding the harmonious interplay of partial and
          complete fullness, and realizing the essence of existence .
        </p>
      </div>
    </div>
  );
};

export default BlogSingle;
