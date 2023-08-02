'use client';
import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilRootWrapperProps {
  children: ReactNode;
}

function RecoilRootWrapper({ children }: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;
