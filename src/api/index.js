import axios from 'axios';

export default {
  async getIssueList(organization, repo, perPage, page) {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER}/repos/${organization}/${repo}/issues?state=open&sort=comments&per_page=${perPage}&page=${page}`
    );
    return {
      result,
      errorMsg: {
        default: '이슈 목록을 불러오는데 실패했습니다!',
      },
    };
  },
};
