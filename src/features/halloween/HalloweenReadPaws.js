import React, { useState } from 'react';
import ReadPawsList from '../../components/ReadPawsList/ReadPawsList';
import HalloweenPaw from './HalloweenPaw';
import HalloweenDecorations from './HalloweenDecorations';
import styles from './HalloweenScene.module.css';
import readerStyles from './HalloweenReader.module.css';

const HalloweenReadPaws = () => {
  const [pawNumber, setPawNumber] = useState(1);
  return (
    <div className={styles.halloween}>
      <HalloweenDecorations pawNumber={pawNumber} />
      <ReadPawsList
        classNames={readerStyles}
        PawComponent={HalloweenPaw}
        onPawChange={setPawNumber}
      />
    </div>
  );
};

export default HalloweenReadPaws;
