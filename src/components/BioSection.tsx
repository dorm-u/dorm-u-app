'use client';

interface BioSectionProps {
  bio: string;
}

const BioSection = ({ bio }: BioSectionProps) => (
  <div className="bio-box p-3 mb-4">
    <h4><strong>About Me</strong></h4>
    <p>{bio}</p>
  </div>
);

export default BioSection;
