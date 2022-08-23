import './MediaItem.css';
import DetailsBlock from "./DetailsBlock";

/** Wrapper для отдельного элемента в медиа блоке*/
function MediaItem(props) {
    const {data} = props;
    let detailsBlock = DetailsBlock(data.type, data.data)

    return (
        <div className="media-item">
            <div className="media-item__description">
                {data.description}
            </div>
            {detailsBlock}
        </div>
    );
}

export default MediaItem;