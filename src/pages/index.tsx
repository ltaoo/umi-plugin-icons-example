import { LikeFilled, LikeOutlined, LikeTwotone, WomanOutlined } from '@icons';

import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <LikeFilled className={styles.like} />
      <LikeOutlined className={styles.like} />
      <LikeTwotone className={styles.like} />
      <WomanOutlined className={styles.like} />
    </div>
  );
}
