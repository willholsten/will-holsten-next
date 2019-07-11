import style from './styles.scss';

export default class PortfolioDevices extends React.Component {
  render() {
    const { devices } = this.props;
    return (
      <div className={style.PortfolioDevices}>
        <img className={style.devices} src={devices} />
      </div>
    );
  }
}
