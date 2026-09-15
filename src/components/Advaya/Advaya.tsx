import { advayaFilesData } from '../../data/advayaFilesData';
import LetterSections from '../letterSections/letterSections';
import type { LetterPageData } from '../../types/letterSection';

const advayaPageData: LetterPageData = {
  title: 'Advaya 2.0-2k26',
  sections: [
    {
      heading: 'Advaya 2.0-2k26',
      items: advayaFilesData.map((file) => ({
        ...file,
        title: file.title.replaceAll('_', ' '),
      })),
    },
  ],
};

function Advaya() {
  return <LetterSections data={advayaPageData} />;
}

export default Advaya;
