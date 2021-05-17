import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TVPresenter = ({ result, loading, error }) => null

TVPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default TVPresenter
