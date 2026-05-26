import React from 'react';

export const Table = ({ className = '', children, ...props }) => (
  <table className={`w-full border-collapse ${className}`} {...props}>
    {children}
  </table>
);

export const TableHeader = ({ className = '', children, ...props }) => (
  <thead className={className} {...props}>
    {children}
  </thead>
);

export const TableBody = ({ className = '', children, ...props }) => (
  <tbody className={className} {...props}>
    {children}
  </tbody>
);

export const TableRow = ({ className = '', children, ...props }) => (
  <tr className={`border-b border-white/10 ${className}`} {...props}>
    {children}
  </tr>
);

export const TableHead = ({ className = '', children, ...props }) => (
  <th className={`px-4 py-2 text-left text-white font-medium ${className}`} {...props}>
    {children}
  </th>
);

export const TableCell = ({ className = '', children, ...props }) => (
  <td className={`px-4 py-2 text-white ${className}`} {...props}>
    {children}
  </td>
);

export { TableHeader as TableHeadWrapper, TableBody as TableBodyWrapper };
