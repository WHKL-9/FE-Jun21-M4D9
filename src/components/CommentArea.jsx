import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // state = {
  //     comments: [], // comments will go here
  //     isLoading: false,
  //     isError: false
  // }
  useEffect(() => {
    console.log({ asin });
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            asin.selectedBook,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA0MTM3ODQsImV4cCI6MTYzMTYyMzM4NH0.Cd0GcqYFEnLL10oCPdOqvtbsLxHvlni1fA6P59nM0pw",
            },
          }
        );
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          setComments(comments);
          setIsLoading(false);
          setIsError(false);
          // this.setState({ comments: comments, isLoading: false, isError: false })
        } else {
          console.log("error");
          setIsLoading(false);
          setIsError(true);
          // this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
        // this.setState({ isLoading: false, isError: true })
      }
    };
    fetchComments();
  }, [asin]);

  // componentDidUpdate = async (prevProps) => {
  //     if (prevProps.asin !== this.props.asin) {
  //         this.setState({
  //             isLoading: true
  //         })
  //         try {
  //             let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
  //                 headers: {
  //                     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MzA0MTM3ODQsImV4cCI6MTYzMTYyMzM4NH0.Cd0GcqYFEnLL10oCPdOqvtbsLxHvlni1fA6P59nM0pw"
  //                 }
  //             })
  //             console.log(response)
  //             if (response.ok) {
  //                 let comments = await response.json()
  //                 this.setState({ comments: comments, isLoading: false, isError: false })
  //             } else {
  //                 console.log('error')
  //                 this.setState({ isLoading: false, isError: true })
  //             }
  //         } catch (error) {
  //             console.log(error)
  //             this.setState({ isLoading: false, isError: true })
  //         }
  //     }
  // }

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;

//converted
