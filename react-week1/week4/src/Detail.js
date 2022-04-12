import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBucket,
  updateBucket,
  updateBucketFB,
  deleteBucketFB,
} from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  const delBucket = () => {
    dispatch(deleteBucket(bucket_index));
  };
  return (
    <>
      <h1>{bucket_list[bucket_index] ? bucket_list[bucket_index].text : ""}</h1>
      <Button
        variant="outlined"
        onClick={() => {
          // dispatch(updateBucket(bucket_index));
          dispatch(updateBucketFB(bucket_list[bucket_index].id));
          history.goBack();
        }}
      >
        완료하기
      </Button>
      <Button
        variant="outlined"
        color="primary"
        color="secondary"
        onClick={() => {
          history.goBack();
          dispatch(deleteBucketFB(bucket_list[bucket_index].id));
        }}
      >
        삭제하기
      </Button>
    </>
  );
};

export default Detail;
