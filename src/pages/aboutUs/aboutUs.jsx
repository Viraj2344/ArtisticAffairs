// Import necessary dependencies
import React from 'react';
import Layout from '../../components/layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

// Component for showcasing individual profiles
const ProfileCard = ({ name, photo, instagram, linkedin, facebook ,journey }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="mb-4">
      <img src={photo} alt={name} className="w-72 h-72 object-cover rounded-full" />
    </div>
    <h2 className="text-xl font-medium mb-2">{name}</h2>
    <div className="flex space-x-4 mb-4">
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-gray-500 hover:text-pink-500 cursor-pointer text-4xl" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-gray-500 hover:text-blue-700 cursor-pointer text-4xl" />
      </a>
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-gray-500 hover:text-blue-500 cursor-pointer text-4xl" />
      </a>
    </div>
    {/* Placeholder for journey information */}
    <div className="text-left">
      <h3 className="text-lg font-medium mb-2">Journey </h3>
      <p className="text-gray-600">
{journey}
      </p>
    </div>
  </div>
);

// Component for the Profiles page
const AboutUs = () => {
  const profiles = [
    {
      name: 'Person 1',
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', // Replace with the actual URL of the photo
      instagram: 'https://www.instagram.com/person1/',
      linkedin: 'https://www.linkedin.com/in/person1/',
      facebook: 'https://www.facebook.com/person1/',
      journey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolores sapiente ipsam culpa delectus quia consequatur! In praesentium corrupti temporibus obcaecati ullam. Hic quasi nam dolor aspernatur impedit cupiditate earum.'
    },
    {
      name: 'Person 2',
      photo: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', // Replace with the actual URL of the photo
      instagram: 'https://www.instagram.com/person2/',
      linkedin: 'https://www.linkedin.com/in/person2/',
      facebook: 'https://www.facebook.com/person2/',
      journey: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia dolores sapiente ipsam culpa delectus quia consequatur! In praesentium corrupti temporibus obcaecati ullam. Hic quasi nam dolor aspernatur impedit cupiditate earum.'

    },
  ];

  return (
    <Layout>
      <section className="text-gray-900 body-font bg-gray-300"
       style={{ fontFamily: 'Salsa' }}>
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="w-auto mb-6 lg:mb-10">
            <h1 className="lg:text-6xl text-3xl text-center font-bold title-font mb-2">
              Meet the Team
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center">
            {profiles.map((profile, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
                <ProfileCard {...profile} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
