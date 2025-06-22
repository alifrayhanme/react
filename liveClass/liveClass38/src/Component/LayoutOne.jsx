import useScreenSize from "../hooks/useScreenSize";

export const LayoutOne = () => {

  const onSmallDevice = useScreenSize(768)


  return (
    <>
      <h1>I am in {onSmallDevice ? "small" : "big"}</h1>
    </>
  );

};
