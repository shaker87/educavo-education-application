import React from "react";

function SingleNewsAndUpdate(props) {
    const {image, user, date, title, description} = props.singleData;
  return (
    <div class='blog-item'>
      <div class='image-part'>
        <img src={image} alt='' />
      </div>
      <div class='blog-content'>
        <ul class='blog-meta'>
          <li>
            <i class='fa fa-user-o'></i> {user}
          </li>
          <li>
            <i class='fa fa-calendar'></i>{date}
          </li>
        </ul>
        <h3 class='title'>
          <a href='blog-single.html'>
            {title}
          </a>
        </h3>
        <div class='desc'>
          {description}
        </div>
        <div class='btn-btm'>
          <div class='cat-list'>
            <ul class='post-categories'>
              <li>
                <a href='#'>College</a>
              </li>
            </ul>
          </div>
          <div class='rs-view-btn'>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNewsAndUpdate;
