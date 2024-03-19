export default function formattedDate(props) {
  const inputDate = props;
  const date = new Date(inputDate); //New date object { Date{march 2023}, Date{june 2024}}

  const options = { year: "numeric", month: "long" };

  const formattedDate = date.toLocaleDateString(undefined, options);

  return formattedDate;
}
