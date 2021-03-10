import React from "react";


function SingleTestimonial(props) {
    const {image1, description, image2, linkText, spanText} = props.singleData;
  return (
    <div class='testi-item'>
      <div class='author-desc'>
        <div class='desc'>
          <img
            class='quote'
            src={image1}
            alt=''
          />
          {description}
        </div>
        <div class='author-img'>
          <img src={image2} alt='' />
        </div>
      </div>
      <div class='author-part'>
        <a class='name' href='#'>
          {linkText}
        </a>
        <span class='designation'>{spanText}</span>
      </div>
    </div>
  );
}

export default SingleTestimonial;
