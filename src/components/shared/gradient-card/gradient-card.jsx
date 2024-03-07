import clsx from 'clsx';
import PropTypes from 'prop-types';

import Link from 'components/shared/link/link';

const GradientCard = ({ className, children, as: Tag = 'div', ...rest }) => {
  const clickable = Tag === Link;

  return (
    <Tag
      className={clsx(className, 'group relative block h-full overflow-hidden rounded-xl')}
      {...rest}
    >
      {/* bg */}
      <span
        className={clsx(
          'absolute inset-0 opacity-100',
          'bg-[radial-gradient(162.08%_141.42%_at_0%_0%,rgba(48,50,54,0.20)0%,rgba(48,50,54,0.00)48.97%),linear-gradient(165deg,#1A1C1E_6.13%,#111213_75.96%)]',
          clickable && 'transition-opacity duration-300 group-hover:opacity-0'
        )}
      />

      {/* bg on hover */}
      {clickable && (
        <span
          className={clsx(
            'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
            'bg-[radial-gradient(162.08%_141.42%_at_0%_0%,rgba(58,60,64,0.50)0%,rgba(58,60,64,0.00)48.97%),linear-gradient(165deg,#2C2E32_6.13%,#18191B_75.96%)]'
          )}
        />
      )}

      {/* noise */}
      <span className="absolute inset-0 bg-[url('/images/noise.png')] bg-cover opacity-40" />

      {/* border gradient */}
      <div
        className={clsx(
          'absolute inset-0 rounded-[inherit] !border-2',
          'border-image-[linear-gradient(116.81deg,#5E6268_0%,#2E2F32_24.63%,#1D1D1F_55.02%,#1D1E1F_100%),linear-gradient(56.71deg,#151618_0%,rgba(21,22,24,0)_28.44%)]'
        )}
      />

      {/* content */}
      <div className="relative h-full">{children}</div>
    </Tag>
  );
};

GradientCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.oneOf([PropTypes.string, PropTypes.func]),
};

export default GradientCard;
