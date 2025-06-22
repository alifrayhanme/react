import useScreenSize from '../hooks/useScreenSize'

export const LayoutTwo = () => {
    const onSmallDevice = useScreenSize(425)

  return (
    <>
    <h1 className={onSmallDevice ? "small": "big"}>Layout Two</h1>
    </>
  )
}
