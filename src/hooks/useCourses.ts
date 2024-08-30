import { useState, useEffect } from 'react';
import { Course } from '../types';
import { getCourses } from '../services/api';

export const useCourses = (initialPage = 1, initialLimit = 8) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(initialPage);
  const [limit] = useState(initialLimit);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const data = await getCourses(page, limit, filter);
        setCourses(data.courses);
        setTotalPages(Math.ceil(data.total / limit));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page, limit, filter]);

  return { courses, loading, error, page, setPage, totalPages, filter, setFilter };
};
