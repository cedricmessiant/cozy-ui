import React from 'react'
import PropTypes from 'prop-types'

const FileSelector = ({
  className,
  disabled,
  hidden,
  multiple,
  processSelected,
  renderContent,
  ...inputProps
}) => (
  <label role="button" disabled={disabled} className={className}>
    {renderContent()}
    <input
      hidden={hidden}
      type="file"
      multiple={multiple}
      onChange={e => {
        if (multiple) {
          processSelected(Array.from(e.target.files))
        } else {
          processSelected(Array.from(e.target.files)[0])
        }
      }}
      {...inputProps}
    />
  </label>
)

FileSelector.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  multiple: PropTypes.bool,
  processSelected: PropTypes.func.isRequired,
  renderContent: PropTypes.func
}

FileSelector.defaultProps = {
  disabled: false,
  hidden: true,
  multiple: false,
  renderContent: () => null
}

export default FileSelector
