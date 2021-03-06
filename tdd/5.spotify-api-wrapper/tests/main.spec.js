import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main'

chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  describe('=> smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist
      expect(search).to.be.a.function
    })

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist
      expect(searchAlbums).to.be.a.function
    })

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist
      expect(searchArtists).to.be.a.function
    })

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist
      expect(searchTracks).to.be.a.function
    })

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist
      expect(searchPlaylists).to.be.a.function
    })
  })

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch')
      const artists = search()

      expect(fetchedStub).to.have.been.calledOnce
    })
  })
})
