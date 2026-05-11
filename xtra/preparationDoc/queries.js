/*SELECT
 patients.patient_id,
 first_name,
 last_name
 FROM patients
 JOIN admissions 
 ON patients.patient_id = admissions.patient_id
 WHERE admissions.diagnosis = 'Dementia';
 */
/*select (
    select count(gender)
    from patients
    where gender = 'M'
  ) as male_count, (
    select count(gender)
    from patients
    where gender = 'F'
  ) as female_count;
*/

/*select patient_id,diagnosis
from admissions
group by patient_id,diagnosis having count(*)>1;*/

/*select city ,count(*) as num_patients from patients
group by city order by num_patients desc,city asc;*/

// select first_name,last_name , 'Patient' as role from patients

// union all

// select first_name,last_name , 'Doctor' as role from doctors

// select allergies,count(*) as total_diagnosis
// from patients
// group by allergies
// having allergies not null order by total_diagnosis desc;

// SELECT first_name, last_name, birth_date
// FROM patients
// WHERE birth_date >= '1970-01-01'
//   AND birth_date <  '1980-01-01'
// ORDER BY birth_date ASC;

// select concat(upper( last_name),',',lower( first_name)) as new_name_format
// from patients
// order by first_name desc;

// select province_id, sum(height) as sum_height
// from patients
// group by province_id having sum_height >=7000;

// Show all columns for patient_id 542's most recent admission_date.
// select * from admissions
// where patient_id=542 and admission_date =
// ( select Max(admission_date) from admissions where patient_id=542);

// select doctors.first_name,doctors.last_name,count(*) as admissions_total
// from doctors join admissions on doctors.doctor_id=admissions.attending_doctor_id
// group by doctors.doctor_id;

// select province_names.province_name,count(*) as patient_count
// from province_names join patients on patients.province_id=province_names.province_id
// group by province_names.province_name
// order by patient_count desc;

// For every admission, display the patient's full name, their admission diagnosis, and their doctor's full name who diagnosed their problem.
// select concat(patients.first_name,' ',patients.last_name),
// admissions.diagnosis, concat(doctors.first_name,' ',doctors.last_name)
// from patients join admissions on patients.patient_id = admissions.patient_id
// join doctors on admissions.attending_doctor_id=doctors.doctor_id;

// Medium
// Show patient_id, first_name, last_name from patients whose does not have any records in the admissions table. (Their patient_id does not exist in any admissions.patient_id rows.)
// SELECT patients.patient_id,patients.first_name,patients.last_name
// FROM patients left join admissions
// on patients.patient_id = admissions.patient_id
// where admissions.patient_id is null;

// Display every patient that has at least one admission and show their most recent admission along with the patient and doctor's full name.
//  my query
// select concat(patients.first_name,' ',patients.last_name) as patient_name,admissions.admission_date,
// concat(doctors.first_name,' ',doctors.last_name) as doctor_name
// from admissions join patients on admissions.patient_id = patients.patient_id
// join doctors on doctors.doctor_id=admissions.attending_doctor_id
// where admissions.admission_date = (select MAx(admission_date) from admissions
// where patient_id=admissions.patient_id
// );

// correct
// SELECT
//     p.first_name || ' ' || p.last_name AS patient_name,
//     a.admission_date,
//     d.first_name || ' ' || d.last_name AS doctor_name
// FROM admissions a
// JOIN patients p
//     ON a.patient_id = p.patient_id
// JOIN doctors d
//     ON d.doctor_id = a.attending_doctor_id
// WHERE a.admission_date = (
//     SELECT MAX(admission_date)
//     FROM admissions
//     WHERE patient_id = a.patient_id
// );
