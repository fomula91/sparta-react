import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, updateBucket } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";

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
      <h1>{bucket_list[bucket_index].text}</h1>
      <button
        onClick={() => {
          dispatch(updateBucket(bucket_index));
          history.goBack();
        }}
      >
        완료하기
      </button>
      <button
        onClick={() => {
          history.goBack();
          delBucket();
        }}
      >
        삭제하기
      </button>
    </>
  );
};

export default Detail;
