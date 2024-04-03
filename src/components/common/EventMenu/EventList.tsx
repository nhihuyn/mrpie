import React from 'react';
import Event from '../menu/event';
import { motion } from 'framer-motion';
import event from '../../../assets/images/Event.jpg';
import event1 from '../../../assets/images/Event_1.jpg';
import event3 from '../../../assets/images/Event3.jpg';
const EventList = () => {
  return (
    <div className="grid items-center md:ml-14 lg:ml-8 mb-6">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-8 grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
      >
        
          <Event image={event} size={350} IsEvent={true} />
          <Event image={event1} size={350} IsEvent={true} />
          <Event image={event3} size={350} IsEvent={true} />
          <Event image={event1} size={350} IsEvent={true} />
          <Event image={event3} size={350} IsEvent={true} />
          <Event image={event} size={350} IsEvent={true} />
          <Event image={event3} size={350} IsEvent={true} />
          <Event image={event} size={350} IsEvent={true} />
          <Event image={event1} size={350} IsEvent={true} />

          
        
      </motion.div>
    </div>
  );
};

export default EventList;
