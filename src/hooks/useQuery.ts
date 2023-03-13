import { useState, useEffect } from 'react';

export const useQuery = (query: any) => {
  const stringQuery = new URLSearchParams(query).toString();
  return stringQuery;
}