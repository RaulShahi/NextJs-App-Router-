'use client'
import React from 'react'

const MealsError = ({error}) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to add meal.</p>
    </main>
  );
}

export default MealsError