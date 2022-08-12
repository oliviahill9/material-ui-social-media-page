import Post from "./Post";
import { Box } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Post
        image="https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg"
        caption="Beatiful blue skies"
        title="John Doe"
        subheader="27 July, 2022"
        avatarImage="J"
        alt="a field with blue skies and white clouds"
      />
      <Post
        image="https://images.pexels.com/photos/1757363/pexels-photo-1757363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        caption="Sun rays in the forest"
        title="Olivia Hill"
        subheader="26 July, 2022"
        avatarImage="0"
        alt="on the forest floor with sun rays shining through"
      />
      <Post
        image="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        caption="My holiday in the Bahamas"
        title="Joe Bloggs"
        subheader="25 July, 2022"
        avatarImage="J"
        alt="white sandy beach with palm trees and the ocean"
      />
      <Post
        image="https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        caption="Throwback to wintery days like this"
        title="Sarah Smith"
        subheader="24 July, 2022"
        avatarImage="S"
        alt="snowy road with snow covered trees lining the road"
      />
      <Post
        image="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        caption="Taking some time to relax at my country retreat"
        title="Max Jones"
        subheader="23 July, 2022"
        avatarImage="M"
        alt="view of a house roof over a grassy hilltop with trees and a sunset"
      />
      <Post
        image="https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        caption="I love dramatic landscapes like this"
        title="Lily Cooper"
        subheader="22 July, 2022"
        avatarImage="L"
        alt="mountainous landscape with snowy peaks and a dirt path"
      />
    </Box>
  );
};

export default Feed;
