import Avatar from "@mui/material/Avatar";

const videoList = [
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>1</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>Python Basics</div>
    ),
    videos: [
      {
        title: "Python for Beginners",
        src: "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",

        articleTitle: "Python Tutorial for Beginners",
        articleUrl:
          "https://medium.com/fintechexplained/everything-about-python-from-beginner-to-advance-level-227d52ef32d2",
      },
      {
        title: "Python Tutorial for Beginners",
        src: "https://www.youtube.com/watch?v=hEgO047GxaQ&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=2",

        articleTitle: "Python Tutorial for Beginners",
        articleUrl:
          "https://medium.com/fintechexplained/everything-about-python-from-beginner-to-advance-level-227d52ef32d2",
      },
      {
        title: "Python Installation",
        src: "https://www.youtube.com/watch?v=mbryl4MZJms&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=3",

        articleTitle: "Python Installation",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a707994013",
      },
      {
        title: "Getting Started with Python",
        src: "https://www.youtube.com/watch?v=DWgzHbglNIo&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=4",

        articleTitle: "Getting Started with Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>2</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        Data Structures in Python
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>3</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        Data Types in Python
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>4</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        If Else while do while
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>5</div>
      </Avatar>
    ),
    name: <div style={{ marginLeft: "40px", marginTop: "10px" }}>Loops</div>,

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>6</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        Break continue statement
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>7</div>
      </Avatar>
    ),
    name: <div style={{ marginLeft: "40px", marginTop: "10px" }}>Modules</div>,
    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>8</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        Input And Output
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "8px", marginTop: "5px" }}>9</div>
      </Avatar>
    ),
    name: (
      <div style={{ marginLeft: "40px", marginTop: "10px" }}>
        Errors and Exception
      </div>
    ),

    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "if Else while Do while",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
  {
    avatar: (
      <Avatar
        style={{
          float: "left",
          display: "inline",
          backgroundColor: "white",
          color: "black",
        }}
        sx={{ width: 30, height: 30 }}
      >
        <div style={{ marginLeft: "1px", marginTop: "5px" }}>10</div>
      </Avatar>
    ),
    name: <div style={{ marginLeft: "40px", marginTop: "10px" }}>Classes</div>,
    videos: [
      {
        title: "List in Python",
        src: "https://www.youtube.com/watch?v=Eaz5e6M8tL4&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=6",
        articleTitle: "List in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
      {
        title: "Tuple | Set in Python",
        src: "https://www.youtube.com/watch?v=Mf7eFtbVxFM&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3&index=7",
        articleTitle: "Tuple | Set in Python",
        articleUrl:
          "https://medium.com/co-learning-lounge/how-to-download-install-python-on-windows-2021-44a7079940131",
      },
    ],
  },
];
export default videoList;
