declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const PasswordVisibilityOnIconcontent: React.FC<SvgProps>;
  export default content;
}

declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import { IconProps } from 'react-native-vector-icons/Icon';
  import { Component } from 'react';

  export default class MaterialCommunityIcons extends Component<IconProps> { }
}