import NextImage from "next/image"
import styled from "styled-components"

import AutofitGrid from "components/AutofitGrid"
import Container from "components/Container"
import LinkedinIcon from "components/LinkedinIcon"
import Page from "components/Page"
import SectionTitle from "components/SectionTitle"
import { media } from "utils/media"

const TeamMembers = [
	{
		name: "Abhishek Punia",
		phone: "(+91) 80597 70008",
		mail: "apunia21@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/abhishek-punia-186b3a241/",
		image: "/testimonials/PastYearTeamImages/24-25/abhishek.jpg",
	},
	{
		name: "B P Hitesh",
		phone: "(+91) 93601 19151",
		mail: "bphitesh21@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/hitesh-b-p-796730246/",
		image: "/testimonials/PastYearTeamImages/24-25/hitesh.jpg",
	},
	{
		name: "Jatin Rastogi",
		phone: "(+91) 85709 40447",
		mail: "jatinr21@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/jatin-rastogi-06ba0b16b/",
		image: "/testimonials/PastYearTeamImages/24-25/jatin.jpg",
	},
	{
		name: "Shashank S",
		phone: "(+91) 76766 06660",
		mail: "shashank21@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/shashanksc03/",
		image: "/testimonials/PastYearTeamImages/24-25/shashank.jpg",
	},
	{
		name: "Ashwanth P Nair",
		phone: "(+91) 99646 20056",
		mail: "ashwanthpn23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/ashwanth-p-nair/",
		image: "/testimonials/PastYearTeamImages/24-25/ashwanth.jpg",
	},
	{
		name: "Siddhant Ramesh Lakkam",
		phone: "(+91) 82916 65476",
		mail: "siddhantrl23@iitk.ac.in",
		linkedin: "https://www.linkedin.com/in/siddhant-lakkam-754806290/",
		image: "/testimonials/PastYearTeamImages/24-25/siddhant.jpg",
	},
]
const APC = [
	{ name: "Abhishek Yadav", phone: "(+91) 8081872261", mail: "yabhishek22@iitk.ac.in" },
	{ name: "Aditya Gupta", phone: "(+91) 8602564252", mail: "gaditya22@iitk.ac.in" },
	{ name: "Aditya Raj", phone: "(+91) 9694681598", mail: "adityar22@iitk.ac.in" },
	{ name: "Akansha Ratnakar", phone: "(+91) 8109167721", mail: "akanshar22@iitk.ac.in" },
	{ name: "Anushka Meena", phone: "(+91) 7014882945", mail: "anushkam22@iitk.ac.in" },
	{ name: "Atharv Moghe", phone: "(+91) 6232133073", mail: "atharvm22@iitk.ac.in" },
	{ name: "Esra Fatima", phone: "(+91) 9721020379", mail: "esra22@iitk.ac.in" },
	{ name: "Gautam Chandak", phone: "(+91) 9755180883", mail: "gautamch22@iitk.ac.in" },
	{ name: "Ishan Dandwani", phone: "(+91) 9887541586", mail: "ishand22@iitk.ac.in" },
	{ name: "Madhav Maheshwari", phone: "(+91) 8827130189", mail: "mmadhav22@iitk.ac.in" },
	{ name: "Manavjeet Singh Bhilwara", phone: "(+91) 8383034574", mail: "manavjeetw22@iitk.ac.in" },
	{ name: "Naina", phone: "(+91) 9548612879", mail: "naina22@iitk.ac.in" },
	{ name: "Naman Aggarwal", phone: "(+91) 9306113068", mail: "namana22@iitk.ac.in" },
	{ name: "Navya Nihal", phone: "(+91) 8318796404", mail: "navyanihal22@iitk.ac.in" },
	{ name: "Nikunj Muchhal", phone: "(+91) 9174700918", mail: "nikunjm22@iitk.ac.in" },
	{ name: "Piyush Kumar", phone: "(+91) 8448222319", mail: "kpiyush22@iitk.ac.in" },
	{ name: "Samyak Jain", phone: "(+91) 9667572400", mail: "samyakj22@iitk.ac.in" },
	{ name: "Satvik Pratap Singh", phone: "(+91) 8787291383", mail: "satvikp22@iitk.ac.in" },
	{ name: "Shrasti Sahu", phone: "(+91) 9301713749", mail: "shrastis22@iitk.ac.in" },
	{ name: "Siddhant Lalpuria", phone: "(+91) 9057781000", mail: "sidhantl22@iitk.ac.in" },
	{ name: "Tasneet Singh", phone: "(+91) 8871700985", mail: "tasneets22@iitk.ac.in" },
	{ name: "Vandan Neema", phone: "(+91) 8989861455", mail: "vandann22@iitk.ac.in" }
]

const DPC = [
	{ name: "Devang Kishor Saindankar", department: "Aerospace Engineering", email: "devangks23@iitk.ac.in", phone: "(+91) 8208547899" },
	{ name: "Eswar Sai Viswajit Manchalla", department: "Aerospace Engineering", email: "eswarsai23@iitk.ac.in", phone: "(+91) 8919433265" },
	{ name: "M S Bhavani Prasad", department: "Aerospace Engineering", email: "msprasad23@iitk.ac.in", phone: "(+91) 7899320685" },
	{ name: "Eshaan D Chaudhary", department: "Biological Science and Bioengineering", email: "eshaandc23@iitk.ac.in", phone: "(+91) 9664647318" },
	{ name: "Sovan Sahoo", department: "Cognitive Science", email: "sovansahoo23@iitk.ac.in", phone: "(+91) 8455863951" },
	{ name: "Bhumesh Panchal", department: "Chemical Engineering", email: "bhumeshgp23@iitk.ac.in", phone: "(+91) 7359318299" },
	{ name: "Dheeraj Kumar Matania", department: "Chemical Engineering", email: "dheerajkm23@iitk.ac.in", phone: "(+91) 9587222198" },
	{ name: "Ashok Kumar das", department: "Chemistry", email: "ashokkd23@iitk.ac.in", phone: "(+91) 6370730761" },
	{ name: "Anand Sharma", department: "Civil Engineering", email: "anands23@iitk.ac.in", phone: "(+91) 8949588398" },
	{ name: "Pramod Balasaheb Gandugade", department: "Civil Engineering", email: "pramodbg23@iitk.ac.in", phone: "(+91) 8421543404" },
	{ name: "Satyam Agnihotri", department: "Civil Engineering", email: "satyama23@iitk.ac.in", phone: "(+91) 8109610675" },
	{ name: "Prashant Kumar", department: "Computer Science and Engineering", email: "prashantkr23@iitk.ac.in", phone: "(+91) 8416970886" },
	{ name: "Shivam Mishra", department: "Computer Science and Engineering", email: "shivammis23@iitk.ac.in", phone: "(+91) 8889700550" },
	{ name: "Milind Karsoliya", department: "Department of Design", email: "kmilind23@iitk.ac.in", phone: "(+91) 8826946176" },
	{ name: "Vishwaraj Srivastava", department: "Department of Design", email: "vishwaraj22@iitk.ac.in", phone: "(+91) 8528051978" },
	{ name: "Manan Arora", department: "Economics", email: "mananarora23@iitk.ac.in", phone: "(+91) 9319694177" },
	{ name: "Chandrima Upadhyay", department: "Electrical Engineering", email: "chandrima22@iitk.ac.in", phone: "(+91) 8240870059" },
	{ name: "Gautam Jyotishi", department: "Electrical Engineering", email: "gautamj23@iitk.ac.in", phone: "(+91) 8236877655" },
	{ name: "Shivesh Mishra", department: "Electrical Engineering", email: "shiveshm23@iitk.ac.in", phone: "(+91) 7007458407" },
	{ name: "Soumya Swarup Mohanty", department: "Earth Sciences", email: "soumyasm23@iitk.ac.in", phone: "(+91) 9658881920" },
	{ name: "Sukanya Mandal", department: "Earth Sciences", email: "sukanyam23@iitk.ac.in", phone: "(+91) 7001862238" },
	{ name: "Abhinav Pratap Singh", department: "Management Sciences", email: "abhinavp23@iitk.ac.in", phone: "(+91) 8787297312" },
	{ name: "Milind Krishnan", department: "Management Sciences", email: "milindk23@iitk.ac.in", phone: "(+91) 9238763979" },
	{ name: "Dhruvil Panchigar", department: "Mechanical Engineering", email: "dhruvil23@iitk.ac", phone: "(+91) 8511356107" },
	{ name: "Dontireddy Hari Hara Nandana Reddy", department: "Mechanical Engineering", email: "hhreddy23@iitk.ac.in", phone: "(+91) 8008912489" },
	{ name: "Prajapati Pradyum Girish Chandra", department: "Mechanical Engineering", email: "pradyumgir23@iitk.ac.in", phone: "(+91) 9974822168" },
	{ name: "Anmol Singh", department: "Materials Science and Engineering", email: "anmolsingh23@iitk.ac.in", phone: "(+91) 9654412614" },
	{ name: "Lakshmi Dinesh", department: "Materials Science and Engineering", email: "lakshmid23@iitk.ac.in", phone: "(+91) 8547413457" },
	{ name: "Sayan Hazra", department: "Materials Science Programme", email: "sayanhazra23@iitk.ac.in", phone: "(+91) 6296700638" },
	{ name: "Abhinav Mishra", department: "Mathematics", email: "abhinavm23@iitk.ac.in", phone: "(+91) 8948869374" },
	{ name: "Shivang Pandey", department: "Physics", email: "shivangp20@iitk.ac", phone: "(+91) 9532585554" },
	{ name: "Nairit Banerjee", department: "Photonics Science and Engineering", email: "nairitb23@iitk.ac.in", phone: "(+91) 7003492328" },
	{ name: "Shantaprasad Kamat", department: "Statistics", email: "sdkamat23@iitk.ac.in", phone: "(+91) 9822635095" },
	{ name: "Souhardya Mitra", department: "Statistics", email: "smitra23@iitk.ac.in", phone: "(+91) 8768677448" },
	{ name: "Lakshika", department: "Statistics and Data Science", email: "lakshika21@iitk.ac.in", phone: "(+91) 9056211116" },
	{ name: "Suyash Tripati", department: "Sustainable Energy Engineering", email: "suyasht23@iitk.ac.in", phone: "(+91) 9461742114" },
	{ name: "Vaibhav Tripati", department: "Sustainable Energy Engineering", email: "vaibhavt23@iitk.ac.in", phone: "(+91) 7565980166" }
]

const WEBHEAD = [
	{
		name: "Burhanuddin Merchant",
		position: "Web Head",
		mail: "bmerchant22@iitk.ac.in",
		phone: "(+91) 88159 92866",
		linkedin: "https://www.linkedin.com/in/burhanuddin-merchant-23622a254/"
	},
	{
		name: "Yash Chauhan",
		position: "Web Head",
		mail: "yashc22@iitk.ac.in",
		phone: "(+91) 98370 90171",
		linkedin: "https://www.linkedin.com/in/yash-chauhan-10b696250/"
	},
]

const WEBEXEC = [
	{
		name: "Abhimanyu Solanki",
		position: "Web Executive",
		mail: "abhimanyus23@iitk.ac.in",
		phone: "(+91) 82181 96261"
	},
	{
		name: "Akshat",
		position: "Web Executive",
		mail: "akshat23@iitk.ac.in",
		phone: "(+91) 93897 33410"
	},
	{
		name: "Pandya Rushabh Bhavesh",
		position: "Web Executive",
		mail: "rushabhbp23@iitk.ac.in",
		phone: "(+91) 79844 19251"
	},
	{
		name: "Sandeep Kumar Jha",
		position: "Web Executive",
		mail: "sandeepkj23@iitk.ac.in",
		phone: "(+91) 88516 07038"
	},
]

export interface StudentTeamProps {
	notNeedTitleAtStudentTeam?: boolean;
}

export default function StudentTeam({ notNeedTitleAtStudentTeam }: StudentTeamProps) {
	return (
		<Page title="IITK Placement Coordinators" description="Feel free to reach out to us at spo@iitk.ac.in" keywords="SPO Team IITK, Placement Coordinators IITK, Web Team IITK, Old Team SPO IITK" notNeedTitle={notNeedTitleAtStudentTeam}>
			<DarkerBackgroundContainer>
				<SectionTitle>Overall Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{TeamMembers.map((member, i) => {
							return (
								<div key={member.name} style={{ width: "29em" }}>
									<Card>
										{member.image && <NextImage src={member.image} width={128} height={128} alt={member.name} />}
										<Title>{member.name}</Title>
										<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
										<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
										<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>
									</Card>
								</div>
							)
						}
						)}
					</CustomAutofitGrid4>
					<br />
				</Container>
				<SectionTitle>Assistant Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid3 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{APC.map((member) => (
							<div key={member.name} style={{ width: "35em" }}>
								<Card>
									<Title>{member.name}</Title>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid3>
				</Container>
				<SectionTitle>Department Placement Coordinators</SectionTitle>
				<Container>
					<CustomAutofitGrid4 style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
						{DPC.map((member) => (
							<div key={member.name} style={{ width: "35em" }}>
								<Card style={{ height: "11em" }}>
									<Title>{member.name}</Title>
									<Description>{member.department}</Description>
									<Description><Link href={"mailto:" + member.email}>{member.email}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container>
				<SectionTitle>Web Team</SectionTitle>
				<Container>
					<CustomAutofitGrid2>
						{WEBHEAD.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.position}</Description>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
									{<small><a href={member.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon style={{ cursor: "pointer", opacity: 0.8 }} /></a></small>}
								</Card>
							</div>
						))}
					</CustomAutofitGrid2>
					<br />
					<CustomAutofitGrid4>
						{WEBEXEC.map((member) => (
							<div key={member.name}>
								<Card>
									<Title>{member.name}</Title>
									<Description>{member.position}</Description>
									<Description><Link href={"mailto:" + member.mail}>{member.mail}</Link></Description>
									<Description><Link href={"tel:" + member.phone}>{member.phone}</Link></Description>
								</Card>
							</div>
						))}
					</CustomAutofitGrid4>
				</Container>
			</DarkerBackgroundContainer>
		</Page >
	)
}

const Card = styled.div`
  display: flex;
  padding: 2.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border-radius: 0.6rem;
  color: rgb(var(--text));
  font-size: 1.6rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  opacity: 0.6;
`

const CustomAutofitGrid2 = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid3 = styled(AutofitGrid)`
--autofit-grid-item-size: 30rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid4 = styled(AutofitGrid)`
--autofit-grid-item-size: 25rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 25rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 100%;
  }
`

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 20rem;

  ${media("<=tablet")} {
    --autofit-grid-item-size: 15rem;
  }

  ${media("<=phone")} {
    --autofit-grid-item-size: 50%;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`

const Link = styled.a`
  text-decoration: none;
  color: var(--primary);
`
