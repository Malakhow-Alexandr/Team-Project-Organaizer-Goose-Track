import {
  CustomText,
  TooltipStyled,
  TooltipTitle,
  TooltipText,
} from './StatisticsChart.styles';

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipStyled>
        <TooltipTitle>{label}</TooltipTitle>
        <TooltipText>
          <span>By Day: </span> {payload[0].value + '%'}
        </TooltipText>
        <TooltipText>
          <span>By Month: </span>
          {payload[1].value + '%'}
        </TooltipText>
      </TooltipStyled>
    );
  }

  return null;
};

export const CustomXAxisTick = props => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <CustomText
        x={0}
        y={-3}
        dy={16}
        textAnchor="middle"
        fontSize={14}
        fontFamily="Inter"
      >
        {payload.value}
      </CustomText>
    </g>
  );
};

export const CustomYAxisTick = props => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <CustomText
        x={-10}
        y={0}
        dy={4}
        textAnchor="middle"
        fontSize={14}
        fontFamily="Inter"
      >
        {payload.value}
      </CustomText>
    </g>
  );
};

export const BarCustomLabel = props => {
  const { x, y, width, value } = props;
  const labelY = y - 5;

  return (
    <g>
      <CustomText
        x={x + 2 + width / 2}
        y={labelY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
        fontFamily="Inter"
        fontWeight={500}
      >
        {`${value}%`}
      </CustomText>
    </g>
  );
};

export const TitleCustomLabel = props => {
  const { value } = props;
  const { x, y } = props.viewBox;

  return (
    <CustomText
      x={x}
      y={y - 20}
      dy={-10}
      fontSize={16}
      fontFamily="Inter"
      fontWeight="700"
    >
      {value}
    </CustomText>
  );
};
