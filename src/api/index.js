import axios from 'axios'

/**
 * Axios 인스턴스 생성
 * - AKS LoadBalancer IP 직접 호출
 */
const instance = axios.create({
  baseURL: 'http://4.230.92.215',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

/**
 * 게시글 목록 조회
 * GET /board/list
 * 필수 params: rows, page, sort
 */
function getBoardListAPI(params) {
  return instance.get('/board/list', { params })
}

/**
 * 게시글 상세 조회
 * GET /board/detail
 * params: docNo
 */
function getBoardDetailAPI(params) {
  return instance.get('/board/detail', { params })
}

/**
 * 게시글 작성
 * POST /board/insert
 * params: title, content
 */
function insertBoardAPI(params) {
  return instance.post('/board/insert', null, { params })
}

/**
 * 게시글 수정
 * POST /board/update
 * params: docNo, title, content
 */
function updateBoardAPI(params) {
  return instance.post('/board/update', null, { params })
}

/**
 * 게시글 삭제
 * POST /board/delete
 * params: docNo
 */
function deleteBoardAPI(params) {
  return instance.post('/board/delete', null, { params })
}

/**
 * 댓글 작성
 * POST /board/reply/insert
 * params: docNo, comment
 */
function insertReplyAPI(params) {
  return instance.post('/board/reply/insert', null, { params })
}

/**
 * 댓글 조회
 * GET /board/reply/list
 * params: docNo
 */
function getReplyListAPI(params) {
  return instance.get('/board/reply/list', { params })
}

/**
 * 댓글 수정
 * POST /board/reply/update
 * params: replyNo, docNo, comment
 */
function updateReplyAPI(params) {
  return instance.post('/board/reply/update', null, { params })
}

/**
 * 댓글 삭제
 * POST /board/reply/delete
 * params: replyNo, docNo
 */
function deleteReplyAPI(params) {
  return instance.post('/board/reply/delete', null, { params })
}

export {
  getBoardListAPI,
  getBoardDetailAPI,
  insertBoardAPI,
  updateBoardAPI,
  deleteBoardAPI,
  insertReplyAPI,
  getReplyListAPI,
  updateReplyAPI,
  deleteReplyAPI,
}
