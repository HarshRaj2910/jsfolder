import React from 'react'
import './Home.css'
import image from '../assets/slider_image.png'
function Home() {
  return (
    <div>
      <img src={image} alt='Slider_image'
      width="100%" height="400px"/>
      <p className='para'>A paragraph is a self-contained unit of writing, typically a group of sentences, focused on a single main idea or topic, helping to organize text and guide readers by chunking information into logical segments, often signaled by an indent or line break. While length varies stylistically, effective paragraphs usually include a topic sentence introducing the main point, followed by supporting sentences that develop or explain it, creating coherence and unity within that section.
Key charac  sentences relate to one central theme or controlling idea.
Coherence: Sentences logically connect and flow together, often using transition words.
Structure: Often starts with a topic sentence, followed by supporting details, and sometimes a concluding sentence, similar to a mini-essay.
Function: Organizes writing, signals shifts in topic, and makes text easier to read and understand.
Example of structure:
Topic Sentence: Introduces the main point (e.g., "The first step in baking cookies is gathering ingredients").
Supporting Sentences: Provide details, examples, or reasons (e.g., "This includes flour, sugar, butter, and eggs...").
Concluding Sentence: Summarizes or transitions (optional).

</p>
<div className='image_row'>
  <img src={image} alt='image 1'/>
  <img src={image} alt='image 1'/>
  <img src={image} alt='image 1'/>
  <img src={image} alt='image 1'/>

</div>
    </div>
  )
}

export default Home
