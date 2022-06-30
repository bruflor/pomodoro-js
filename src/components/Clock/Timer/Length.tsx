interface ILenght {
  title: string;
  changeTime: number;
  type: number;
  time: number;
  formatTime: number;
}
export const Length = ({
  title,
  changeTime,
  type,
  time,
  formatTime,
}: ILenght) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input></input>
        <button></button>
      </div>
    </div>
  );
};
