export default function getStudentsByLocation(students, city) {
  const location = students.filter((place) => place.location === city);
  return location;
}
