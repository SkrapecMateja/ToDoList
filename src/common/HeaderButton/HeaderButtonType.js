import backIcon from "../../images/arrow-left.png";
import closeIcon from "../../images/close.png";
import shareIcon from "../../images/share.png";
import saveIcon from "../../images/check.png";
import addIcon from "../../images/add.png";

const HeaderButtonType = {
  back: {
    imageSource: backIcon,
    width: 14,
    height: 14,
    isLeft: true
  },
  close: {
    imageSource: closeIcon,
    width: 12,
    height: 12,
    isLeft: true
  },
  share: {
    imageSource: shareIcon,
    width: 14,
    height: 18,
    isLeft: false
  },
  save: {
    imageSource: saveIcon,
    width: 16,
    height: 11,
    isLeft: false
  },
  add: {
    imageSource: addIcon,
    width: 17,
    height: 17,
    isLeft: false
  }
};

export default HeaderButtonType;
