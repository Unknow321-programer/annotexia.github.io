const visuals = {
  "Image Annotation": "image",
  "Video Annotation": "video",
  "Text Annotation": "text",
  "Audio Annotation": "audio",
  "Data Labeling": "dataset",
};

export default function ServiceDataVisual({ service }) {
  const type = visuals[service];
  return (
    <span aria-hidden="true" className={`service-data-visual service-visual-${type}`}>
      {type === "image" && <><i className="visual-box" /><i className="visual-box visual-box-secondary" /><i className="visual-keypoints" /></>}
      {type === "video" && <><i className="visual-frame visual-frame-one" /><i className="visual-frame visual-frame-two" /><i className="visual-frame visual-frame-three" /><i className="visual-timeline" /></>}
      {type === "text" && <><i className="visual-text-line" /><i className="visual-text-line" /><i className="visual-text-line" /><i className="visual-text-highlight" /></>}
      {type === "audio" && <i className="visual-waveform">{Array.from({ length: 19 }, (_, index) => <b key={index} />)}</i>}
      {type === "dataset" && <><i className="visual-dataset-card" /><i className="visual-dataset-card" /><i className="visual-dataset-card" /><i className="visual-dataset-flow" /></>}
    </span>
  );
}
