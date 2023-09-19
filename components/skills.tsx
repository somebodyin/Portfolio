"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28" id="skills">
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-1">
            {
                skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white border borderBlack rounded-xl px-5 py-2 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >{skill}</motion.li>                    
                ))
            }
        </ul>
    </section>
  )
}
