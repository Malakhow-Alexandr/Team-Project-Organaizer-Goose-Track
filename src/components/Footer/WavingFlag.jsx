import WavingFlag from '@garvae/react-waving-flag';
import { FlagWrapper } from './WavingFlag.styled';

export const WavingFlagCustom = () => {
  return (
    <FlagWrapper>
      
      <WavingFlag
        flag="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png"
        height={60}
        width={100}
        animationSpeed={2}
        curvature={15}
        isShadow={false}
      />
    </FlagWrapper>
  );
};
