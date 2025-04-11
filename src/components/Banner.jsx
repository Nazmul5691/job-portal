import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'

export default function Banner() {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-[10px] border-b-[10px] border-blue-600 shadow-2xl" />

                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 10, delay:5, repeat: Infinity }}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-[10px] border-b-[10px] border-blue-600 shadow-2xl" />
                </div>
                <div className="flex-1">
                    {/* <h1 className="text-5xl font-bold">Jobs Offer for you!</h1> */}
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">
                        Jobs <motion.span
                            animate={{ color: ['#337aff', '#5bff33', '#ff3f33'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Offer
                        </motion.span> <span></span>
                        for you!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}